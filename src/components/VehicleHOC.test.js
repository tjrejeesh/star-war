import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom';
import {
    Switch,
    Route,
} from "react-router-dom";
import VehicleHOC from "./VehicleHOC";

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Render SearchHOC', () => {
    const selectedVehicle = jest.fn();
    test('Render vehicle lists', () => {
        const props = {};
        let wrapper = mount(<VehicleHOC {...props}/>);
        expect(wrapper.contains(<VehicleHOC/>)).toBe(true);
        wrapper.find('div').at(0).simulate('click');
        expect(selectedVehicle.mock.calls.length).toEqual(0);
        wrapper.find('div').at(0).simulate('click');
    });

    test('should call selectedVehicle function when vehicle radio button is clicked', () => {
        const vehicle = shallow(
            <input onClick={selectedVehicle} />
        );
        vehicle.simulate('click');
        expect(selectedVehicle).toHaveBeenCalled();
    });
});


