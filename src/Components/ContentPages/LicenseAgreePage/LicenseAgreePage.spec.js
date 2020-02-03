import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LicenseAgreePage from './LicenseAgreePage'
import LicenseAgreementContent from '../../../assets/LicenseAgreementContent';
import WinSummary from '../../../Components/ContentPages/MSTR2020/WindowsCustom/Summary/WinSummary';

configure({ adapter: new Adapter() });

let wrapper = null;
describe('ConfigurationContent', () => {
    beforeEach(() => {
        wrapper = mount(
            <LicenseAgreePage
                getOriginState={jest.fn().mockReturnValue('mock state value')}
                setOriginState={jest.fn()}
            />
        );
    });

    it('Test if it has LicenseAgreementContent component', () => {
        expect(wrapper.contains(WinSummary)).toEqual(true);
    });
});