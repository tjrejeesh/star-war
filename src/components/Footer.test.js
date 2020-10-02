import React from 'react';
import { shallow } from 'enzyme';
import Footer from "./Footer";

describe('Render header', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer/>);
    });

    test('Render footer with title', () => {
        expect(wrapper.find('.footer').text()).toBe('Copyright');
    });
});


