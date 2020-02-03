import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinCustomerInfoAndInstallationDirect from './LinCustomerInfoAndInstallationDirect';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinCustomerInfoAndInstallationDirect', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <LinCustomerInfoAndInstallationDirect
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={0}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={0}
                useOs="linux"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test if all input boxes have been rendered', () => {
        expect(wrapper.find('.ant-input')).toHaveLength(6);
    });

    // User Name Input box
    it('Test User Name input with empty should show error', () => {
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

    it('Test User Name input with non-empty should show success', () => {
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

    // Company Name Input box
    it('Test Company Name input with empty should show error', () => {
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

    it('Test Company Name input with non-empty should show success', () => {
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

    // License Key Input box
    it('Test License Key input with empty should show error', () => {
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

    it('Test License Key input with non-empty should show success', () => {
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

    // Home Directory Input box
    it('Test Home Directory input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: ''
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Home Directory input with invalid Linux Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: 'C:\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Home Directory input with relative Linux Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: '~/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Home Directory input with absolute Windows Path should show success', () => {
        wrapper
            .find('.ant-input')
            .at(3)
            .simulate('change', {
                target: {
                    value: '/var/opt/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(3)
                .hasClass('has-error')
        ).toEqual(false);
    });

    // Install Directory Input box
    it('Test Install Directory input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: {
                    value: ''
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Install Directory input with invalid Linux Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: {
                    value: 'C:\\Program Files (x86)MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Install Directory input with relative Linux Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: {
                    value: '~/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Install Directory input with absolute Windows Path should show success', () => {
        wrapper
            .find('.ant-input')
            .at(4)
            .simulate('change', {
                target: {
                    value: '/opt/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(4)
                .hasClass('has-error')
        ).toEqual(false);
    });




    // Log Directory Input box
    it('Test Log Directory input with empty should show error', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: ''
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Log Directory input with invalid Linux Path should show error', () => {
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
        ).toEqual(true);
    });

    it('Test Log Directory input with relative Linux Path should show error', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: '~/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test Log Directory input with absolute Windows Path should show success', () => {
        wrapper
            .find('.ant-input')
            .at(5)
            .simulate('change', {
                target: {
                    value: '/var/log/MicroStrategy'
                }
            });
        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(5)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
