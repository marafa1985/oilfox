import React from 'react';
import ReactDOM from 'react-dom';
import DeviceInfo from './DeviceInfo'
import { create } from "react-test-renderer";

describe('DeviceInfo test', () => {
    it('it should return a data if the DeviceInfo contains one device', () => {
        const component = create(<DeviceInfo device={{ id: "test", metering: { battery: 1, hwid: '', id: '', value: 25 } }} />);
        let deviceTable: any = component.toTree();
        expect(deviceTable.props.device).toMatchObject({ "id": "test" });
    });
});