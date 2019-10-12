import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import DeviceTable from './DeviceTable'

describe('DeviceTable test', () => {
    it('it should return "no data found" if the deviceList is empty', () => {
        const component = create(<DeviceTable deviceList={[]} handleChangeDevice={() => { }} />);
        let deviceTable: any = component.toTree();
        expect(deviceTable.rendered.rendered).toContain("No data found");
    });

    it('it should return a data if the deviceList contains one device', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DeviceTable deviceList={[{ id: "test", metering: { battery: 1, hwid: '', id: '', value: 25 } }]} handleChangeDevice={() => { }} />, div);
        expect(div.textContent).toContain("test");
        ReactDOM.unmountComponentAtNode(div);
    });
});