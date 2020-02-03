import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinPortalMDXVDS from './WinPortalMDXVDS';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('WinPortalMDXVDS', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <WinPortalMDXVDS
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

    //Portal Virtual Name Input box
    it('Test Portal Virtual Name with empty value should show error', () => {
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

    it('Test Portal Virtual Name with non-empty value should show success', () => {
        wrapper
            .find('.ant-input')
            .at(0)
            .simulate('change', { target: { value: 'MicroStrategyPortal' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(0)
                .hasClass('has-error')
        ).toEqual(false);
    });

    //MDX Server Virtual Name Input box
    it('Test MDX Server Virtual Name with empty value should show error', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', { target: { value: '' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(true);
    });

    it('Test MDX Server Virtual Name with non-empty value should show success', () => {
        wrapper
            .find('.ant-input')
            .at(1)
            .simulate('change', { target: { value: 'MicroStrategyMDX' } });

        expect(
            wrapper
                .find('.ant-form-item-control')
                .at(1)
                .hasClass('has-error')
        ).toEqual(false);
    });
});
