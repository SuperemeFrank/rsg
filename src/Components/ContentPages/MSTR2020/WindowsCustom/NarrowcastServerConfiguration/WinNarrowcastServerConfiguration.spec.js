import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinNarrowcastServerConfiguration from './WinNarrowcastServerConfiguration';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinNarrowcastServerConfiguration', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinNarrowcastServerConfiguration
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={9}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={9}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );

        wrapper
            .find('input')
            .at(0)
            .simulate('click');
        wrapper.setProps({
            getOriginState: jest.fn().mockReturnValueOnce(false)
        });
    });

    // Login Input box
    it('Test Login input with empty should show error', () => {
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

    it('Test Login input with non-empty should show success', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: {
                    value: 'some words'
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // Domain Input box
    it('Test Domain input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', {
                target: {
                    value: ''
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Domain input with non-empty should show success', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', {
                target: {
                    value: 'some words'
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // Password Input box
    it('Test Password input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: ''
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Password input with non-empty should show success', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'some words'
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // Confirmantion Input box
    it('Test Confirmation input different from password, show error', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'Password'
                }
            });

        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: 'confirm password'
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Confirmation input same to the password should show success', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'same password'
                }
            });

        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: 'same password'
                }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
