import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinTelemetryConfiguration from './WinTelemetryConfiguration';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinTopology Configuration', () => {
                                                beforeEach(() => {
                                                    jest.mock(
                                                        '../../../../Navigation/Navigation',
                                                        () => 'Nav'
                                                    );
                                                    wrapper = mount(
                                                        <WinTelemetryConfiguration
                                                            nextStep={jest.fn()}
                                                            backStep={jest.fn()}
                                                            steps={4}
                                                            getOriginState={jest
                                                                .fn()
                                                                .mockReturnValue(
                                                                    'mock state value'
                                                                )}
                                                            setOriginState={jest.fn()}
                                                            setBasicState={jest.fn()}
                                                            deepestStep={4}
                                                            useOs="windows"
                                                            useMode="custom"
                                                            useVersion="2020"
                                                        />
                                                    );

                                                    wrapper
                                                        .find('input')
                                                        .at(0)
                                                        .simulate('change', {
                                                            target: {
                                                                checked: true
                                                            }
                                                        });
                                                });

                                                // Local Fully Qualified domain name
                                                it('Test Local Fully Qualified domain name input with empty should show error', () => {
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
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(0)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Local Fully Qualified domain name .ant-input with invalid domain name should show error', () => {
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
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(0)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Local Fully Qualified domain name .ant-input with invalid IP address should show error', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(0)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    '322.232.12.321'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(0)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Local Fully Qualified domain name .ant-input with valid domain name should show success', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(0)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    'google.com'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(0)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(false);
                                                });

                                                it('Test Local Fully Qualified domain name .ant-input with valid IP address should show success', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(0)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    '192.168.2.1'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(0)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(false);
                                                });

                                                // Remote Fully Qualified domain name
                                                it('Test Remote Fully Qualified domain name input with empty should show error', () => {
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
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(2)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Remote Fully Qualified domain name .ant-input with invalid domain name should show error', () => {
                                                    
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(1)
                                                        .simulate('change', {
                                                            target: {
                                                                value: 'sawd.'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(2)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Remote Fully Qualified domain name .ant-input with invalid IP address should show error', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(1)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    '322.232.12.321'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(2)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(true);
                                                });

                                                it('Test Remote Fully Qualified domain name .ant-input with valid domain name should show success', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(1)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    'google.com'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(2)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(false);
                                                });

                                                it('Test Remote Fully Qualified domain name .ant-input with valid IP address should show success', () => {
                                                    wrapper
                                                        .find('.ant-input')
                                                        .at(1)
                                                        .simulate('change', {
                                                            target: {
                                                                value:
                                                                    '192.168.2.1'
                                                            }
                                                        });
                                                    expect(
                                                        wrapper
                                                            .find(
                                                                '.ant-form-item-control'
                                                            )
                                                            .at(2)
                                                            .hasClass(
                                                                'has-error'
                                                            )
                                                    ).toEqual(false);
                                                });
                                            });
