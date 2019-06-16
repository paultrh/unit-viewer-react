<h1 align="center">unit-viewer-react</h1>

<div align="center">
  <strong>A react component to display junit xml test file</strong>
</div>

<br />

<div align="center">
  <!-- Licence -->
  <a href="https://github.com/paultrh/unit-viewer-react/blob/master/LICENCE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg"
      alt="Licence" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.com/paultrh/unit-viewer-react">
    <img src="https://travis-ci.com/paultrh/unit-viewer-react.svg?branch=master"
      alt="Build Status" />
  </a>
</div>

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

## Demo

[Live demo](https://paultrh.github.io/unit-viewer-react/)

## License

[MIT](http://vjpr.mit-license.org)