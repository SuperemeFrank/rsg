import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinIdentityConfigStep2 from './LinIdentityConfigStep2';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinIdentityConfigStep2', () => {
                                             beforeEach(() => {
                                                 jest.mock(
                                                     '../../../../Navigation/Navigation',
                                                     () => 'Nav'
                                                 );
                                                 wrapper = mount(
                                                     <LinIdentityConfigStep2
                                                         nextStep={jest.fn()}
                                                         backStep={jest.fn()}
                                                         steps={3}
                                                         getOriginState={jest
                                                             .fn()
                                                             .mockReturnValue(
                                                                 'mock state value'
                                                             )}
                                                         setOriginState={jest.fn()}
                                                         setBasicState={jest.fn()}
                                                         deepestStep={3}
                                                         useOs="linux"
                                                         useMode="custom"
                                                         useVersion="2020"
                                                     />
                                                 );
                                             });


                                             

                                             //one-way Port
                                             it('Test one-way Port input with empty should show error', () => {
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

                                             it('Test one-way Port input with out of boundary  Port number should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test one-way Port input with String should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test one-way Port input with out of valid port number should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
                                                     .simulate('change', {
                                                         target: {
                                                             value: '31'
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

                                             //two-way Port
                                             it('Test two-way Port input with empty should show error', () => {
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

                                             it('Test two-way Port input with out of boundary  Port number should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test two-way Port input with String should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
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
                                                         .at(1)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test two-way Port input with out of valid port number should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(1)
                                                     .simulate('change', {
                                                         target: {
                                                             value: '31'
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

                                             // SSL Certificate File Input box
                                             it('Test SSL Certificate File input with empty should show error', () => {
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

                                             it('Test SSL Certificate File input with invalid Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
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
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test SSL Certificate File input with relative Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
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
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test SSL Certificate File input with absolute Linux Path should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(2)
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
                                                         .at(2)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // Private Key File Input box
                                             it('Test Private Key File input with empty should show error', () => {
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

                                             it('Test Private Key File input with invalid Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(3)
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
                                                         .at(3)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Private Key File input with relative Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(3)
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
                                                         .at(3)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test Private Key File input with absolute Linux Path should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(3)
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
                                                         .at(3)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });

                                             // SSL Certificate Chain File Input box
                                             it('Test SSL Certificate Chain File input with empty should show error', () => {
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

                                             it('Test SSL Certificate Chain File input with invalid Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(4)
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
                                                         .at(4)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test SSL Certificate Chain File input with relative Linux Path should show error', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(4)
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
                                                         .at(4)
                                                         .hasClass('has-error')
                                                 ).toEqual(true);
                                             });

                                             it('Test SSL Certificate Chain File input with absolute Linux Path should show success', () => {
                                                 wrapper
                                                     .find('.ant-input')
                                                     .at(4)
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
                                                         .at(4)
                                                         .hasClass('has-error')
                                                 ).toEqual(false);
                                             });
                                         });
