import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Device_LIST } from "../Queries/index"
import { Loading, DeviceList } from "../Components"
import { Device } from '../Types/Type'
import './Devices.scss'

const Devices: React.FC = () => {
    const { loading, error, data } = useQuery(Device_LIST);
    if (loading) return <Loading />;
    if (error) return <p>error: {error} </p>;
    const datasource = data.DeviceList as Device[]
    return (
        <div className="device-list">
            <DeviceList data={datasource} />
        </div>
    );
}

export default Devices;