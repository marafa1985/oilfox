import * as React from 'react'
import { Button, Table, List } from 'semantic-ui-react'
import { Device } from '../../Types/Type'
import './DeviceTable.scss'

export interface IDeviceTableProps {
    deviceList: Device[],
    handleChangeDevice: (device: Device) => void
}

const DeviceTable: React.FC<IDeviceTableProps> = (props: IDeviceTableProps) => {
    return (
        props.deviceList.length === 0 ?
            <span>No data found</span> :
            <Table celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>Hardware ID</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Device Info</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {
                        props.deviceList.map((device: Device) => {
                            return (
                                <Table.Row key={device.metering.hwid}>
                                    <Table.Cell >
                                        {device.metering.hwid}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <List bulleted>
                                            <List.Item><div className="item-value">Device id:</div>{`${device.id}`}</List.Item>
                                            <List.Item><div className="item-value">Battery charge:</div>{`${device.metering.battery * 100} %`}</List.Item>
                                            <List.Item><div className="item-value">Last Metering Value:</div>{`${device.metering.value} cm`}</List.Item>
                                        </List>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button primary onClick={() => props.handleChangeDevice(device)}>Details</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
    );
}

export default DeviceTable
