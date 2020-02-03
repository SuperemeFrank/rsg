import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinOfficeConfiguration from './WinOfficeConfiguration';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinOfficeConfiguration', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinOfficeConfiguration
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={6}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={6}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test URL with empty value should show error', () => {
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

    it('Test URL with invalid url value should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', { target: { value: 'http:sdwazzzzz' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test URL with valid url value should show error', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', {
                target: { value: 'https://jestjs.io/docs/en/mock-functions' }
            });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });
});