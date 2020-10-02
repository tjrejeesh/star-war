import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';

import {
    Switch,
    Route,
} from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import Header from "./components/Header";
import Result from "./components/Result";
import Footer from "./components/Footer";

describe('Start War to find FALCONE', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App/>);
    });

    test('has the required routes', () => {
        expect(wrapper.find(Route).props().path).toBe('/');
    });

    test('has the required routes', () => {
        expect(wrapper.find(Route).props().path).toBe('/');
    });

    test('Render Header component', () => {
        expect(wrapper.contains(<Header />)).toBe(true);
    });

    test('Render SearchContainer component', () => {
        expect(wrapper.contains(<SearchContainer />)).toBe(true);
    });

    test('Render Result component when url change', () => {
        expect(wrapper.contains(<Result />)).toBe(false);
        wrapper.setProps({path: '/result'});
        expect(wrapper.contains(<Result />)).toBe(false);
    });

    test('Render Footer component', () => {
        expect(wrapper.contains(<Footer />)).toBe(true);
    });
});


