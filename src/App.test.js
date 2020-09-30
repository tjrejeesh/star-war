import React from 'react';
import App from './App';

import { mount } from 'enzyme';

describe('Start War to find FALCONE', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App/>);
    });

    test('render the title', () => {
        const wrapper = mount(<App/>);
        expect(wrapper.find("h1").text()).toContain('This is title');
    });
});


