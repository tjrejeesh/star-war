import React from 'react';
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import {
    Switch,
    Route,
} from "react-router-dom";
import SearchHOC from "./SearchHOC";
import {Search} from "semantic-ui-react";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Render SearchHOC', () => {

    test('Render destination 1', () => {
        const props = {id: 'search1',
            placeholder: 'Destination1',
            loading: true};
        let wrapper = mount(<SearchHOC {...props}/>);
        expect(wrapper.contains(<SearchHOC {...props}/>)).toBe(true);
    });

    test('Render destination 2', () => {
        const props = {id: 'search2',
            placeholder: 'Destination2',
            loading: true};
        let wrapper = mount(<SearchHOC {...props}/>);
        expect(wrapper.contains(<SearchHOC {...props}/>)).toBe(true);
    });

    test('Render destination 3', () => {
        const props = {id: 'search3',
            placeholder: 'Destination3',
            loading: true};
        let wrapper = mount(<SearchHOC {...props}/>);
        expect(wrapper.contains(<SearchHOC {...props}/>)).toBe(true);
    });

    test('Render destination 4', () => {
        const props = {id: 'search4',
            placeholder: 'Destination4',
            loading: true};
        let wrapper = mount(<SearchHOC {...props}/>);
        expect(wrapper.contains(<SearchHOC {...props}/>)).toBe(true);
    });

    test('Render search input', () => {
        let wrapper = mount(<Search/>);
        expect(wrapper.contains(<Search/>)).toBe(true);
    });

    test('on change of search input', () => {
        const handleSearchChange = jest.fn();
        let wrapper = mount(<Search onChange={handleSearchChange}/>);
        wrapper.find('Search').simulate('change');
        expect(handleSearchChange.mock.calls.length).toEqual(1);
    });

});


