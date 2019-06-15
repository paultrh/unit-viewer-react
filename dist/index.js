'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExpansionPanel = require('@material-ui/core/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpansionPanelDetails = require('@material-ui/core/ExpansionPanelDetails');

var _ExpansionPanelDetails2 = _interopRequireDefault(_ExpansionPanelDetails);

var _ExpansionPanelSummary = require('@material-ui/core/ExpansionPanelSummary');

var _ExpansionPanelSummary2 = _interopRequireDefault(_ExpansionPanelSummary);

var _Done = require('@material-ui/icons/Done');

var _Done2 = _interopRequireDefault(_Done);

var _Close = require('@material-ui/icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _Assignment = require('@material-ui/icons/Assignment');

var _Assignment2 = _interopRequireDefault(_Assignment);

var _NotInterested = require('@material-ui/icons/NotInterested');

var _NotInterested2 = _interopRequireDefault(_NotInterested);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _ExpandMore = require('@material-ui/icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('@material-ui/core/styles');

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
        root: {
            width: '100%'
        },
        iconRecap: {
            margin: theme.spacing(1),
            fontSize: 64,
            paddingRight: 10
        },
        iconDoneCustom: {
            color: 'green'
        },
        iconCloseCustom: {
            color: 'red'
        },
        timing: {
            flexGrow: 1,
            textAlign: 'right'
        },
        summaryStatus: {
            height: '100%',
            width: 'auto',
            backgroundColor: 'green'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary
        },
        paperContent: {
            alignItems: "center",
            height: 100,
            justifyContent: "center"
        },
        paperContainer: {
            paddingBottom: 25
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
    };
});

var UnitViewer = function UnitViewer(props) {
    var classes = useStyles();

    var _useState = (0, _react.useState)([]),
        _useState2 = _slicedToArray(_useState, 2),
        jsSuite = _useState2[0],
        setJsSuite = _useState2[1];

    var _useState3 = (0, _react.useState)('pending'),
        _useState4 = _slicedToArray(_useState3, 2),
        status = _useState4[0],
        setStatus = _useState4[1];

    var _React$useState = _react2.default.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        expanded = _React$useState2[0],
        setExpanded = _React$useState2[1];

    (0, _react.useEffect)(function () {
        if (props.xml) {
            var parsedXml = (0, _parser2.default)(props.xml);
            setJsSuite(parsedXml);
            setStatus(parsedXml[0].status);
        } else {
            setStatus('Error, please provide a junit formatted XML');
        }
    }, [props.xml]);

    var handleChange = function handleChange(panel) {
        return function (event, isExpanded) {
            if (!panel.endsWith('0')) {
                setExpanded(isExpanded ? panel : false);
            }
        };
    };

    var get_headers = function get_headers() {
        if (jsSuite.length === 0) {
            return null;
        }
        var suite_header = jsSuite[0].count;
        return _react2.default.createElement(
            'div',
            { className: classes.root },
            _react2.default.createElement(
                _Grid2.default,
                { container: true, spacing: 3 },
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, sm: 3, xs: 12 },
                    _react2.default.createElement(
                        'div',
                        { className: classes.paperContainer },
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.paper },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, className: classes.paperContent },
                                _react2.default.createElement(_Assignment2.default, { className: classes.iconRecap }),
                                suite_header.tests
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, sm: 3, xs: 12 },
                    _react2.default.createElement(
                        'div',
                        { className: classes.paperContainer },
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.paper },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, className: classes.paperContent },
                                _react2.default.createElement(_Done2.default, { className: [classes.iconDoneCustom, classes.iconRecap] }),
                                suite_header.pass
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, sm: 3, xs: 12 },
                    _react2.default.createElement(
                        'div',
                        { className: classes.paperContainer },
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.paper },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, className: classes.paperContent },
                                _react2.default.createElement(_Close2.default, { className: [classes.iconCloseCustom, classes.iconRecap] }),
                                suite_header.fail + suite_header.error
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _Grid2.default,
                    { item: true, sm: 3, xs: 12 },
                    _react2.default.createElement(
                        'div',
                        { className: classes.paperContainer },
                        _react2.default.createElement(
                            _Paper2.default,
                            { className: classes.paper },
                            _react2.default.createElement(
                                _Grid2.default,
                                { container: true, className: classes.paperContent },
                                _react2.default.createElement(_NotInterested2.default, { className: classes.iconRecap }),
                                suite_header.skip + suite_header.unknown
                            )
                        )
                    )
                )
            )
        );
    };

    var get_back_icon = function get_back_icon(status) {
        if (status === 'pass') {
            return _react2.default.createElement(_Done2.default, { className: classes.iconDoneCustom });
        } else if (status === 'error' || status === 'fail') {
            return _react2.default.createElement(_Close2.default, { className: classes.iconCloseCustom });
        } else if (status === 'skip' || status === 'unknown') {
            return _react2.default.createElement(_NotInterested2.default, null);
        }
        return null;
    };

    var get_body = function get_body() {
        if (jsSuite.length === 0) {
            return null;
        }
        var suite_tests = jsSuite[0].tests;
        var listItems = suite_tests.map(function (test) {
            return _react2.default.createElement(
                _ExpansionPanel2.default,
                {
                    key: test._uuid,
                    expanded: expanded === (0, _utils.get_unique_expandable_id)(test),
                    onChange: handleChange((0, _utils.get_unique_expandable_id)(test)) },
                _react2.default.createElement(
                    _ExpansionPanelSummary2.default,
                    {
                        expandIcon: _react2.default.createElement(_ExpandMore2.default, null),
                        'aria-controls': test._uuid + "content",
                        id: test._uuid + "header"
                    },
                    get_back_icon(test.status),
                    _react2.default.createElement(
                        _Typography2.default,
                        { className: classes.heading },
                        test.name
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        { className: classes.secondaryHeading },
                        test.status
                    ),
                    _react2.default.createElement(
                        _Typography2.default,
                        { className: classes.timing },
                        test.time,
                        's'
                    )
                ),
                _react2.default.createElement(
                    _ExpansionPanelDetails2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: classes.messageContainer },
                        _react2.default.createElement(
                            _Typography2.default,
                            null,
                            (0, _utils.get_decoded_uri)(test.message)
                        )
                    )
                )
            );
        });
        return _react2.default.createElement(
            'div',
            null,
            listItems
        );
    };

    return _react2.default.createElement(
        'div',
        { className: classes.globalContainer },
        _react2.default.createElement(
            'h2',
            null,
            'Test suite : ',
            status
        ),
        get_headers(),
        get_body()
    );
};

UnitViewer.propTypes = {
    xml: _propTypes2.default.string.isRequired
};

exports.default = UnitViewer;