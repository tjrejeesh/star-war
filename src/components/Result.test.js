import React from 'react';
import { shallow } from 'enzyme';
import Result from "./Result";
import Estimation from "./Estimation";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Render header', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Result/>);
    });

    test('Render search results title', () => {
        expect(wrapper.find('h1').text()).toBe('Finding Falcone !');
    });

    test('Do not Render search results', () => {
        expect(wrapper.contains(<Estimation/>)).toBe(false);
    });
});


