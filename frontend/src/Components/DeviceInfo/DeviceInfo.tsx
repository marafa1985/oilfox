import * as React from 'react';
import { Item, Input } from 'semantic-ui-react'
import { Device } from '../../Types/Type'
import './DeviceInfo.scss'

export interface IDeviceInfoProps {
    device: Device
}

const DeviceInfo: React.FC<IDeviceInfoProps> = (props: IDeviceInfoProps) => {
    let { id, metering } = props.device;
    return (
        <Item.Group className='container-list'>
            <Item.Header as='h3' content={metering.hwid} />
            <Item.Header as='h4' content='Device data' />
            <Item className="item-list">
                <Item.Content>
                    <Item.Header className='item-lable' content='Device id' />
                    <Item.Content>
                        <Input disabled value={id} />
                    </Item.Content>
                </Item.Content>
            </Item>

            <Item className="item-list">
                <Item.Content>
                    <Item.Header className='item-lable' content='Battery charge' />
                    <Item.Content>
                        <Input disabled value={(metering.battery * 100) + ' %'} />
                    </Item.Content>
                </Item.Content>
            </Item>

            <Item className="item-list">
                <Item.Content>
                    <Item.Header className='item-lable' content='Last Metering Value' />
                    <Item.Content>
                        <Input disabled value={(metering.value.toFixed(0)) + ' cm'} />
                    </Item.Content>
                </Item.Content>
            </Item>

        </Item.Group>
    );
}

export default DeviceInfo
