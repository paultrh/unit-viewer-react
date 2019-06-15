import React from 'react';
import { render} from 'react-dom';
import UnitViewer from '../../src';


const App = () => (

    <UnitViewer xml={`
        <?xml version="1.0" encoding="UTF-8"?>
        <testsuite tests="1" failures="0" time="0.001008">
        <testcase name="LGTM" classname="Passing" time="0.000998"></testcase>
        </testsuite>
    `}/>
);


render(<App />, document.getElementById("root"));