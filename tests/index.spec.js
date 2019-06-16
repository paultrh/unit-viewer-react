import React from 'react';
import ReactDOM from 'react-dom';
import UnitViewer from '../src/index';
import {minimal, basic} from "./data";

describe('Default render', () => {
    it('Should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UnitViewer xml={''}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should renders without crashing with a bad xml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UnitViewer xml={'Nope'}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should renders without crashing with a basic xml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UnitViewer xml={basic}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Should renders without crashing with a basic xml', () => {
        const div = document.createElement('div');
        ReactDOM.render(<UnitViewer xml={minimal}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})