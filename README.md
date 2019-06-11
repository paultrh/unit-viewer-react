# unit-viewer-react

> A react component to display junit xml test file

## Install

```bash
npm install unit-viewer-react
```

## Usage

```JSX
import React from 'react';
import UnitViewer from 'unit-viewer-react'

function myApp() {

    const xml_report = `
        <?xml version="1.0" encoding="UTF-8"?>
        <testsuite tests="1" failures="0" time="0.001008">
        <testcase name="LGTM" classname="Passing" time="0.000998"></testcase>
        </testsuite>
    `

    return (
        <div className="App">
            <UnitViewer xml={xml_report}/>
        </div>
    );
}

export default myApp;
```

## License

[MIT](http://vjpr.mit-license.org)