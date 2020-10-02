import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom';
import {
    Switch,
    Route,
} from "react-router-dom";
import SearchContainer from "./SearchContainer";
import {Button} from "semantic-ui-react";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Render SearchContainer', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SearchContainer/>);
    });
    const searchResults = jest.fn();

    test('Render title', () => {
        expect(wrapper.find('h1').text()).toBe('Finding Falcone !');
        expect(wrapper.find('.info').text()).toBe('Please search four destinations and vehicles for the mission');
    });

    test('should call searchResults function when click on the button', () => {
        const findButton = mount(
            <Button name='searchBtb' onClick={searchResults} />
        );
        findButton.simulate('click');
        expect(searchResults).toHaveBeenCalled();
    });
});


