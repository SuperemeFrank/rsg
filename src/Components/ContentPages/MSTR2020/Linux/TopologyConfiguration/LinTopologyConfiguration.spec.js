import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinTopologyConfiguration from './LinTopologyConfiguration';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinTopologyConfiguration', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <LinTopologyConfiguration
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={7}
                getOriginState={jest.fn().mockReturnValue('MULTIPLE')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={7}
                useOs="linux"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    // Fully Qualified domain name
    it('Test Fully Qualified domain name input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: ''
                }
            });

        
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Fully Qualified domain name .ant-input with invalid domain name should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: 'sawd.'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Fully Qualified domain name .ant-input with invalid IP address should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: '322.232.12.321'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Fully Qualified domain name .ant-input with valid domain name should show success', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: 'google.com'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });

    it('Test Fully Qualified domain name .ant-input with valid IP address should show success', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: '192.168.2.1'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
