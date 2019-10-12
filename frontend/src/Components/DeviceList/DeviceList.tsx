
import * as React from 'react';
import { Header, Segment, Sidebar, Button } from 'semantic-ui-react'
import { DeviceInfo, DeviceTable } from '../index'
import { Device } from '../../Types/Type'
import './DeviceList.scss'


interface IDeviceListProp {
  data: Device[]
}

interface IDeviceListState {
  visible: boolean,
  device: Device
}

class DeviceList extends React.Component<IDeviceListProp, IDeviceListState>{
  state: IDeviceListState = {
    visible: false,
    device: this.props.data[0]
  }

  handSideMenuVisablity = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  handleChangeDevice = (device: Device) => {
    this.setState({
      device: device,
      visible: true
    })
  }
  render() {
    let { visible, device } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          animation='overlay'
          direction="right"
          inverted="true"
          vertical="true"
          visible={visible}
          width='very wide' >
          <DeviceInfo device={device} />
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>
              <Button primary onClick={() => this.handSideMenuVisablity()}>{(this.state.visible ? 'Close' : 'Open') + ' Details View'}</Button>
              <DeviceTable deviceList={this.props.data} handleChangeDevice={this.handleChangeDevice} />
            </Header>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }
}

export default DeviceList