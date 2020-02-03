import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinRegisteringAsService from './LinRegisteringAsService';
import Item from 'antd/lib/list/Item';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinRegisteringAsService', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <LinRegisteringAsService
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={8}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={8}
                useOs="linux"
                useMode="custom"
                useVersion="2020"
            />
        );
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

    // User Group Input box
    it('Test User Group input with empty should show error', () => {
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

    it('Test User Group input with non-empty should show success', () => {
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
});
