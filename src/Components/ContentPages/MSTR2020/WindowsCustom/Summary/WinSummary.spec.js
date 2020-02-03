import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinSummary from './WinSummary';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinSummary', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinSummary
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={6}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={6}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test if the Summary Page has been rendered', () => {
        expect(wrapper.find('.summaryContainer')).toHaveLength(1);
    })
});
