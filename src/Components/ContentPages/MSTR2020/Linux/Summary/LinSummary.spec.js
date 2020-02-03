import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinSummary from './LinSummary';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinSummary', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <LinSummary
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={9}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={9}
                useOs="linux"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test if the Summary Page has been rendered', () => {
        expect(wrapper.find('.summaryContainer')).toHaveLength(1);
    });
});
