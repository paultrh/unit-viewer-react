export const minimal = `<?xml version="1.0" encoding="UTF-8"?>
                        <testsuite tests="1" failures="0" time="0.001008">
                        <testcase name="LGTM" classname="Passing" time="0.000998"></testcase>
                        </testsuite>
                        `

export const basic = `<?xml version="1.0" encoding="UTF-8" ?>
                        <testsuites>
                            <testsuite name="suite with no properties">
                                <testcase name="passing">
                                    <passed></passed>
                                </testcase>
                                <testcase name="failing">
                                    <failure></failure>
                                </testcase>
                                <testcase name="error">
                                    <error></error>
                                </testcase>
                                <testcase name="skipped">
                                    <skipped></skipped>
                                </testcase>
                            </testsuite>
                        </testsuites>
                        `