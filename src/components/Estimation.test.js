import React from 'react';
import { shallow } from 'enzyme';
import Estimation from "./Estimation";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Render header', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Estimation/>);
    });

    let estimation = (distance, speed) => {
        return distance/speed;
    };

    test('Display initial time taken', () => {
        expect(wrapper.find('.timeTaken').text()).toBe('Time Taken : ' + estimation(0, 5));
    });

});


