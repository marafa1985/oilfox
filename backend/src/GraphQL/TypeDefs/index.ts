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
  hwid: Metering!
}
type Query {
  getAlldevice: [Device!]!
}
`;

export default typeDefs;