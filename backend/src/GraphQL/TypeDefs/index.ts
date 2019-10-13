import { gql } from 'apollo-server';

const typeDefs = gql`
type Metering {
  id: String!
  hwid: String!
  value: Float!
  battery: Float!
}
type Device {
  id: String!
  metering: Metering!
}
type Query {
  DeviceList: [Device!]!
}
`;

export default typeDefs;