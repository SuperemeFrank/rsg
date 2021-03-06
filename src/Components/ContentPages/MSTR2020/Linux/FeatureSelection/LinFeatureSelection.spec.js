import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinFeatureSelection from './LinFeatureSelection';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('LinFeatureSelection', () => {
    beforeEach(() => {
        jest.mock('../../../../Navigation/Navigation', () => 'Nav');
        wrapper = mount(
            <LinFeatureSelection
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={1}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={1}
                useOs="linux"
                useMode="custom"
                useVersion="2020"
            />
        );
    });

    it('Test when click next button, the function we pass to it is execute', () => {
        const mockCallBack = jest.fn();
        wrapper.setProps({ nextStep: mockCallBack });
        wrapper
            .find('.buttonNext')
            .at(1)
            .simulate('click');

        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Test when click back button, the function we pass to it is execute', () => {
        const mockCallBack = jest.fn();
        wrapper.setProps({ backStep: mockCallBack });
        wrapper
            .find('.buttonBack')
            .at(1)
            .simulate('click');

        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});