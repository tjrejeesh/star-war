import React from 'react';
import { shallow } from 'enzyme';
import Header from "./Header";
import configureStore from 'redux-mock-store';

const store = configureStore([])();

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    dispatch: jest.fn(),
}));

describe('Render header', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header/>);
    });

    test('Render title', () => {
        expect(wrapper.find('.title').text()).toBe('Star War');
    });

    test('Render reset', () => {
        expect(wrapper.find('.reset').text()).toBe('Reset');
    });
});


