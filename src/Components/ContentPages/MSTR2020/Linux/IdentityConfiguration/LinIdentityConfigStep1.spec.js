import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinIdentityConfigStep1 from './LinIdentityConfigStep1';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinIdentityConfigStep1', () => {
                                             beforeEach(() => {
                                                 jest.mock(
                                                     '../../../../Navigation/Navigation',
                                                     () => 'Nav'
                                                 );
                                                 wrapper = mount(
                                                     <LinIdentityConfigStep1
                                                         nextStep={jest.fn()}
                                                         backStep={jest.fn()}
                                                         steps={2}
                                                         getOriginState={jest
                                                             .fn()
                                                             .mockReturnValue(
                                                                 'mock state value'
                                                             )}
                                                         setOriginState={jest.fn()}
                                                         setBasicState={jest.fn()}
                                                         deepestStep={2}
                                                         useOs="linux"
                                                         useMode="custom"
                                                         useVersion="2020"
                                                     />
                                                 );
                                             });

                                             

                                             // Apache Tomcat Directory Input box
                                             it('Test Apache Tomcat Directory input with empty should show error', () => {
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
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Apache Tomcat Directory input with invalid Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(0)
                                                     .simulate('change', {
                                                         target: {
                                                             value:
                                                                 'C:\\Program Files (x86)MicroStrategy'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(0)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Apache Tomcat Directory input with relative Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(0)
                                                     .simulate('change', {
                                                         target: {
                                                             value:
                                                                 '~/MicroStrategy'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(0)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Apache Tomcat Directory input with absolute Linux Path should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(0)
                                                     .simulate('change', {
                                                         target: {
                                                             value:
                                                                 '/opt/MicroStrategy'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(0)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // Server
                                             it('Test Server input with empty should show error', () => {
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Server input with invalid domain name should show error', () => {
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Server input with invalid IP address should show error', () => {
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Server input with valid domain name should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
                                                     .simulate('change', {
                                                         target: {
                                                             value: 'google.com'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             it('Test Server input with valid IP address should show success', () => {
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             //Port
                                             it('Test Port input with empty should show error', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Port input with out of boundary port number should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
                                                     .simulate('change', {
                                                         target: {
                                                             value: '88888'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Port input with String should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
                                                     .simulate('change', {
                                                         target: {
                                                             value: 'sadw'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Port input with out of valid port number should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
                                                     .simulate('change', {
                                                         target: {
                                                             value: '32'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // User Input box
                                             it('Test User input with empty should show error', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(3)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test User input with non-empty should show success', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(3)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // Password Input box
                                             it('Test Password input with empty should show error', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(4)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Password input with non-empty should show success', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(4)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // Server DB Instance Input box
                                             it('Test Server DB Instance input with empty should show error', () => {
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
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(5)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Server DB Instance input with non-empty should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(5)
                                                     .simulate('change', {
                                                         target: {
                                                             value: 'some words'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(5)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // Log DB Instance Input box
                                             it('Test Log DB Instance input with empty should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(6)
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
                                                         .at(6)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Log DB Instance input with non-empty should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(6)
                                                     .simulate('change', {
                                                         target: {
                                                             value: 'some words'
                                                         }
                                                     });
                                                 expect(
                                                     wrapper
                                                         .find(
                                                             '.ant-form-item-control'
                                                         )
                                                         .at(6)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });
                                         });
