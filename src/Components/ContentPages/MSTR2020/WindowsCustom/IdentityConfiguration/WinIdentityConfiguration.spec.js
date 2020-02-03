import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinIdentityConfiguration from './WinIdentityConfiguration';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('Windows Identity Configuration - SSL Certificate', () => {
                                                     beforeEach(() => {
                                                         jest.mock(
                                                             '../../../../Navigation/Navigation',
                                                             () => 'Nav'
                                                         );
                                                         wrapper = mount(
                                                             <WinIdentityConfiguration
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
                                                                 useOs="windows"
                                                                 useMode="custom"
                                                                 useVersion="2020"
                                                             />
                                                         );
                                                     });



                                                     // Certificate Chain Input box
                                                     it('Test Certificate Chain input with empty should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(0)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test Certificate Chain input with invalid Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(0)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '/opt/src'
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test Certificate Chain input with relative Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(0)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test Certificate Chain input with absolute Windows Path should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(0)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'C:\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
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

                                                     // SSL Server Certificate Input box
                                                     it('Test SSL Server Certificate input with empty should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(1)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(1)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SSL Server Certificate input with invalid Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(1)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '/opt/src'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(1)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SSL Server Certificate input with relative Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(1)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(1)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SSL Server Certificate input with absolute Windows Path should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(1)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'C:\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(1)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });

                                                     // SSL Certificate Key Input box
                                                     it('Test SSL Certificate Key input with empty should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(2)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test SSL Certificate Key input with invalid Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(2)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '/opt/src'
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test SSL Certificate Key input with relative Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(2)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
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

                                                     it('Test SSL Certificate Key input with absolute Windows Path should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(2)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'C:\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
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

                                                     // SSL Certificate Key Password File Input box
                                                     it('Test SSL Certificate Key Password File input with empty should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(3)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(3)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });

                                                     it('Test SSL Certificate Key Password File input with invalid Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(3)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '/opt/src'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(3)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SSL Certificate Key Password File input with relative Windows Path should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(3)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(3)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SSL Certificate Key Password File input with absolute Windows Path should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(3)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'C:\\Program Files (x86)MicroStrategy'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(3)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });
                                                 });
describe('Windows Identity Configuration - SMTP Server', () => {
                                                     beforeEach(() => {
                                                         jest.mock(
                                                             '../../../../Navigation/Navigation',
                                                             () => 'Nav'
                                                         );
                                                         wrapper = mount(
                                                             <WinIdentityConfiguration
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
                                                                 useOs="windows"
                                                                 useMode="custom"
                                                                 useVersion="2020"
                                                             />
                                                         );
                                                     });

                                                     // SMTP Server
                                                     it('Test SMTP Server input with empty should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(4)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(4)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SMTP Server input with invalid domain name should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(4)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'sawd.'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(4)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test SMTP Server input with invalid IP address should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(4)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '322.232.12.321'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(4)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });


                                                     it('Test SMTP Server input with valid domain name should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(4)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'google.com'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(4)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });

                                                     it('Test SMTP Server input with valid IP address should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(4)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '192.168.2.1'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(4)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });


                                                     //Port
                                                     it('Test Port input with empty should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(5)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             ''
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(5)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test Port input with out of boundary port number should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(5)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '88888'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(5)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test Port input with String should show error', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(5)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             'sadw'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(5)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(true);
                                                     });

                                                     it('Test Port input with out of valid port number should show success', () => {
                                                         wrapper
                                                             .find('.ant-input')
                                                             .at(5)
                                                             .simulate(
                                                                 'change',
                                                                 {
                                                                     target: {
                                                                         value:
                                                                             '32'
                                                                     }
                                                                 }
                                                             );
                                                         expect(
                                                             wrapper
                                                                 .find(
                                                                     '.ant-form-item-control'
                                                                 )
                                                                 .at(5)
                                                                 .hasClass(
                                                                     'has-error'
                                                                 )
                                                         ).toEqual(false);
                                                     });
                                                    });
describe('Windows Identity Configuration - SMTP Server Authentication', () => {
                                                                                  beforeEach(
                                                                                      () => {
                                                                                          jest.mock(
                                                                                              '../../../../Navigation/Navigation',
                                                                                              () =>
                                                                                                  'Nav'
                                                                                          );
                                                                                          wrapper = mount(
                                                                                              <WinIdentityConfiguration
                                                                                                  nextStep={jest.fn()}
                                                                                                  backStep={jest.fn()}
                                                                                                  steps={
                                                                                                      3
                                                                                                  }
                                                                                                  getOriginState={jest
                                                                                                      .fn()
                                                                                                      .mockReturnValue(
                                                                                                          'mock state value'
                                                                                                      )}
                                                                                                  setOriginState={jest.fn()}
                                                                                                  setBasicState={jest.fn()}
                                                                                                  deepestStep={
                                                                                                      3
                                                                                                  }
                                                                                                  useOs="windows"
                                                                                                  useMode="custom"
                                                                                                  useVersion="2020"
                                                                                              />
                                                                                          );
                                                                                      }
                                                                                  );

                                                                                  //User Name
                                                                                  it('Test User Name input with empty should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              6
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          ''
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  6
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  it('Test User Name input with String should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              6
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          'any String'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  6
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  
                                                                                

                                                                                  //Password
                                                                                  it('Test Password input with empty should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              7
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          ''
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  7
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  it('Test Password input with String should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              7
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          'any String'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  7
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  //Email Input box
                                                                                  it('Test E-mail input with empty should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              8
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          ''
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                      it('Test Email input with invalid inputs', () => {
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-input'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .simulate(
                                                                                                  'change',
                                                                                                  {
                                                                                                      target: {
                                                                                                          value:
                                                                                                              'some words'
                                                                                                      }
                                                                                                  }
                                                                                              );
                                                                                          expect(
                                                                                              wrapper
                                                                                                  .find(
                                                                                                      '.ant-form-item-control'
                                                                                                  )
                                                                                                  .at(
                                                                                                      8
                                                                                                  )
                                                                                                  .hasClass(
                                                                                                      'has-error'
                                                                                                  )
                                                                                          ).toEqual(
                                                                                              true
                                                                                          );

                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-input'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .simulate(
                                                                                                  'change',
                                                                                                  {
                                                                                                      target: {
                                                                                                          value:
                                                                                                              'sad@'
                                                                                                      }
                                                                                                  }
                                                                                              );
                                                                                          expect(
                                                                                              wrapper
                                                                                                  .find(
                                                                                                      '.ant-form-item-control'
                                                                                                  )
                                                                                                  .at(
                                                                                                      8
                                                                                                  )
                                                                                                  .hasClass(
                                                                                                      'has-error'
                                                                                                  )
                                                                                          ).toEqual(
                                                                                              true
                                                                                          );

                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-input'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .simulate(
                                                                                                  'change',
                                                                                                  {
                                                                                                      target: {
                                                                                                          value:
                                                                                                              'sad@asd'
                                                                                                      }
                                                                                                  }
                                                                                              );
                                                                                          expect(
                                                                                              wrapper
                                                                                                  .find(
                                                                                                      '.ant-form-item-control'
                                                                                                  )
                                                                                                  .at(
                                                                                                      8
                                                                                                  )
                                                                                                  .hasClass(
                                                                                                      'has-error'
                                                                                                  )
                                                                                          ).toEqual(
                                                                                              true
                                                                                          );

                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-input'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .simulate(
                                                                                                  'change',
                                                                                                  {
                                                                                                      target: {
                                                                                                          value:
                                                                                                              'sad@asd'
                                                                                                      }
                                                                                                  }
                                                                                              );
                                                                                          expect(
                                                                                              wrapper
                                                                                                  .find(
                                                                                                      '.ant-form-item-control'
                                                                                                  )
                                                                                                  .at(
                                                                                                      8
                                                                                                  )
                                                                                                  .hasClass(
                                                                                                      'has-error'
                                                                                                  )
                                                                                          ).toEqual(
                                                                                              true
                                                                                          );
                                                                                      });

                                                                

                                                                                  it('Test E-mail input with valid value should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              8
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          'frank@gmail.com'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  8
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });
                                                                              });



describe('Windows Identity Configuration - Fully Qualified Domain Name', () => {
                                                                                  beforeEach(
                                                                                      () => {
                                                                                          jest.mock(
                                                                                              '../../../../Navigation/Navigation',
                                                                                              () =>
                                                                                                  'Nav'
                                                                                          );
                                                                                          wrapper = mount(
                                                                                              <WinIdentityConfiguration
                                                                                                  nextStep={jest.fn()}
                                                                                                  backStep={jest.fn()}
                                                                                                  steps={
                                                                                                      3
                                                                                                  }
                                                                                                  getOriginState={jest
                                                                                                      .fn()
                                                                                                      .mockReturnValue(
                                                                                                          'mock state value'
                                                                                                      )}
                                                                                                  setOriginState={jest.fn()}
                                                                                                  setBasicState={jest.fn()}
                                                                                                  deepestStep={
                                                                                                      3
                                                                                                  }
                                                                                                  useOs="windows"
                                                                                                  useMode="custom"
                                                                                                  useVersion="2020"
                                                                                              />
                                                                                          );
                                                                                      }
                                                                                  );

                                                                                  // Host Name
                                                                                  it('Test Host name input with empty should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              9
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          ''
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  9
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  it('Test Host name input with invalid domain name should show error', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              9
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          'sawd.'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  9
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          true
                                                                                      );
                                                                                  });

                                                                                  it('Test Host name input with invalid IP address should show error', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              9
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          '322.232.12.321'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  9
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          true
                                                                                      );
                                                                                  });

                                                                                  it('Test Host name input with valid domain name should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              9
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          'google.com'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  9
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });

                                                                                  it('Test Host name input with valid IP address should show success', () => {
                                                                                      wrapper
                                                                                          .find(
                                                                                              '.ant-input'
                                                                                          )
                                                                                          .at(
                                                                                              9
                                                                                          )
                                                                                          .simulate(
                                                                                              'change',
                                                                                              {
                                                                                                  target: {
                                                                                                      value:
                                                                                                          '192.168.2.1'
                                                                                                  }
                                                                                              }
                                                                                          );
                                                                                      expect(
                                                                                          wrapper
                                                                                              .find(
                                                                                                  '.ant-form-item-control'
                                                                                              )
                                                                                              .at(
                                                                                                  9
                                                                                              )
                                                                                              .hasClass(
                                                                                                  'has-error'
                                                                                              )
                                                                                      ).toEqual(
                                                                                          false
                                                                                      );
                                                                                  });
                                                                              });
