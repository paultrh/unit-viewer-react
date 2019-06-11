import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from '@material-ui/core/styles';
import parse from "./parser";
import {get_decoded_uri, get_unique_expandable_id} from "./utils";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    timing: {
        flexGrow: 1,
        textAlign: 'right'
    },
    statusPass: {
        backgroundColor: 'green',
    },
    statusFail: {
        backgroundColor: 'red'
    },
    statusGrey: {
        backgroundColor: 'grey',
    },
    statusNone: {},
    summaryStatus: {
        height: '100%',
        width: 'auto',
        backgroundColor: 'green'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    paperContent: {
        height: 100
    },
    paperContainer: {
        paddingBottom: 25,
    },
    globalContainer: {
        margin: 20
    },
    messageContainer: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
        width: '100%',
        borderRadius: 5
    }
}));

const UnitViewer = (props) => {
    const classes = useStyles();
    const [jsSuite, setJsSuite] = useState([]);
    const [status, setStatus] = useState('pending');
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        if (props.xml) {
            const parsedXml = parse(props.xml)
            setJsSuite(parsedXml)
            setStatus(parsedXml[0].status)
        } else {
            setStatus('Error, please provide a junit formatted XML')
        }
    }, [props.xml]);

    const handleChange = panel => (event, isExpanded) => {
        if (!panel.endsWith('0')) {
            setExpanded(isExpanded ? panel : false);
        }
    };

    const get_headers = () => {
        if (jsSuite.length === 0) {
            return null
        }
        const suite_header = jsSuite[0].count
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item sm={6} xs={12}>
                        <div className={classes.paperContainer}>
                            <Paper className={classes.paper}>
                                <div className={classes.paperContent}>nb tests : {suite_header.tests}</div>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className={classes.paperContainer}>
                            <Paper className={classes.paper}>
                                <div className={classes.paperContent}>sucess : {suite_header.pass}</div>
                            </Paper></div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className={classes.paperContainer}>
                            <Paper className={classes.paper}>
                                <div className={classes.paperContent}>failures or
                                    errors: {suite_header.fail + suite_header.error}</div>
                            </Paper></div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <div className={classes.paperContainer}>
                            <Paper className={classes.paper}>
                                <div className={classes.paperContent}>skipped or unknown
                                    : {suite_header.skip + suite_header.unknown}</div>
                            </Paper></div>
                    </Grid>
                </Grid>
            </div>
        )
    }

    const get_back_class = (status) => {
        if (status === 'pass') {
            return classes.statusPass
        } else if (status === 'error' || status === 'fail') {
            return classes.statusFail
        } else if (status === 'skip' || status === 'unknown') {
            return classes.statusGrey
        }
        return classes.statusNone
    }

    const get_body = () => {
        if (jsSuite.length === 0) {
            return null
        }
        const suite_tests = jsSuite[0].tests;
        const listItems = suite_tests.map((test) =>
            <ExpansionPanel
                key={test._uuid}
                className={get_back_class(test.status)}
                expanded={expanded === get_unique_expandable_id(test)}
                onChange={handleChange(get_unique_expandable_id(test))}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls={test._uuid + "content"}
                    id={test._uuid + "header"}
                >
                    <Typography className={classes.heading}>{test.name}</Typography>
                    <Typography className={classes.secondaryHeading}>{test.status}</Typography>
                    <Typography className={classes.timing}>{test.time}s</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className={classes.messageContainer}>
                        <Typography>
                            {get_decoded_uri(test.message)}
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
        return (
            <div>
                {listItems}
            </div>
        )
    };

    return (
        <div className={classes.globalContainer}>
            <h2>Test suite : {status}</h2>
            {get_headers()}
            {get_body()}
        </div>
    );
}

UnitViewer.propTypes = {
    xml: PropTypes.string.isRequired
};

export default UnitViewer
