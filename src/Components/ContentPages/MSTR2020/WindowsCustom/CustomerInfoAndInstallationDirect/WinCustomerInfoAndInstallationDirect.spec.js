import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinCustomerInfoAndInstallationDirect from './WinCustomerInfoAndInstallationDirect';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinCustomerInfoAndInstallationDirect', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinCustomerInfoAndInstallationDirect
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={0}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={0}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test if all input boxes have been rendered', () => {
        expect(wrapper.find('.ant-input')).toHaveLength(7);
    });

    // First Name Input box
    it('Test First Name input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test First Name input with non-empty should show success', () => {
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

    //Last Name Input box
    it('Test Last Name input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Last Name input with non-empty should show success', () => {
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

    //Email Input box
    it('Test E-mail input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Email input with non-empty but not valid inputs', () => {
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
        ).toEqual(true);

        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'sad@'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(true);

        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'sad@asd'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(true);

        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'sad@asd'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test E-mail input with valid value should show success', () => {
        wrapper
            .find('.ant-input')
            .at(2)
            .simulate('change', {
                target: {
                    value: 'frank@gmail.com'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(2)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // Company Name Input box
    it('Test Company Name input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Company Name input with non-empty should show success', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: 'some words'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // License Key Input box
    it('Test License Key input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test License Key input with non-empty should show success', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: {
                    value: 'some words'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // MicroStrategy Installation Directory Input box
    it('Test MicroStrategy Installation Directory input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Installation Directory input with invalid Windows Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: '/opt/src'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Installation Directory input with relative Windows Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: '\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Installation Directory input with absolute Windows Path should show success', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: 'C:\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // MicroStrategy Common File Installation Directory Input box
    it('Test MicroStrategy Common File Installation Directory input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(6)
            .simulate('change', {
                target: { value: '' }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(6)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Common File Installation Directory input with invalid Windows Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(6)
            .simulate('change', {
                target: {
                    value: '/opt/src'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(6)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Common File Installation Directory input with relative Windows Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(6)
            .simulate('change', {
                target: {
                    value: '\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(6)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MicroStrategy Common File Installation Directory input with absolute Windows Path should show success', () => {
        wrapper
            .find('.ant-input')
            .at(6)
            .simulate('change', {
                target: {
                    value: 'C:\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(6)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
