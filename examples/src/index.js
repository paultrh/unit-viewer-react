import React from 'react';
import {render} from 'react-dom';
import UnitViewer from '../../src';


const basic_xml = `<?xml version="1.0" encoding="UTF-8" ?>
                        <testsuites>
                            <testsuite name="suite with no properties">
                                <testcase name="passing" time="0.003">
                                    <passed></passed>
                                </testcase>
                                <testcase name="failing" time="0.005">
                                    <failure message="Not cool enough"></failure>
                                </testcase>
                                <testcase name="error" >
                                    <error message="404 not found" ></error>
                                </testcase>
                                <testcase name="skipped">
                                    <skipped message="Not ready yet"></skipped>
                                </testcase>
                            </testsuite>
                        </testsuites>
                        `

const App = () => (
    <UnitViewer xml={basic_xml}/>
);


render(<App />, document.getElementById("root"));