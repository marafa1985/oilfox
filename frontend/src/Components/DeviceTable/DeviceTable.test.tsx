import React from 'react';
import ReactDOM from 'react-dom';
import DeviceTable from './DeviceTable'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeviceTable deviceList={[]} handleChangeDevice={() => { }} />, div);
    ReactDOM.unmountComponentAtNode(div);
});