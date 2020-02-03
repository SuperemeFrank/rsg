import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinWebMobileVDS from './WinWebMobileVDS';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinWebMobileVDS', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinWebMobileVDS
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={5}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={5}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    //Web Server Virtual Name Input box
    it('Test Web Server Virtual Name with empty value should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', { target: { value: '' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Web Server Virtual Name with non-empty value should show success', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', { target: { value: 'MicroStrategy' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });

    //Mobile Server Virtual Name Input box
    it('Test Mobile Server Virtual Name with empty value should show error', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', { target: { value: '' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Mobile Server Virtual Name with non-empty value should show success', () => {
        
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', { target: { value: 'MicroStrategyMobile' } });


        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
