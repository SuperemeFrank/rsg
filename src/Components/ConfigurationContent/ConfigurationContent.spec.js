import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConfigurationContent from './ConfigurationContent';
import WebMobileVDS from '../ContentPages/MSTR2020/WindowsCustom/WebMobileVDS/WinWebMobileVDS';
import LinFeatureSelection from '../ContentPages/MSTR2020/Linux/FeatureSelection/LinFeatureSelection';
import WinSummary from '../ContentPages/MSTR2020/WindowsCustom/Summary/WinSummary';
import Navigation from '../Navigation/Navigation';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('ConfigurationContent', () => {
    beforeEach(() => {
        
        jest.mock('../Navigation/Navigation.js', () => 'Nav');
        wrapper = mount(
            <ConfigurationContent
                nextStep={jest.fn()}
                backStep={jest.fn()}
                steps={5}
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
                setBasicState={jest.fn()}
                deepestStep={5}
                useOs="windows"
                useMode="custom"
                useVersion="2020"
            />
        );
    });


    it('Test if set all products in Windows Custom, the fifth should be WebMobileVDS', () => {
        
        wrapper.setProps({ steps: 6, useOs: 'windows', useMode: 'custom' });
        expect(wrapper.contains(LinFeatureSelection)).toEqual(true);
    })


    it('Test if set all products in Linux, the second should be LinFeatureSelection', () => {
        wrapper.setProps({ steps: 3, useOs: 'linux' });
        expect(wrapper.contains(LinFeatureSelection)).toEqual(true);
    });

    it('Test if set all products in Windows Express, the second should be WinSummary', () => {
        wrapper.setProps({ steps: 1, useOs: 'windows', useMode: 'express' });
        expect(wrapper.contains(WinSummary)).toEqual(true);
    });


});