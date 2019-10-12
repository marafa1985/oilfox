import gql from 'graphql-tag';

const Device_LIST = gql`
{
  DeviceList{
    id
    metering{
      id
      hwid
      value
      battery
    }
  }
}
`;
export {
	Device_LIST
}