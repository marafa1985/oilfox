import { gql } from 'apollo-server';

const typeDefs = gql`

type Query {
  getAlldevice: Boolean!
}

type Mutation {
  getDeviceInfo(deviceID: String!): Boolean!
}
`;

export default typeDefs;