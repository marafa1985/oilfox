import { gql } from 'apollo-server';

const typeDefs = gql`
type File {
  filename: String
  mimetype: String!
  encoding: String!
}

type SendStatus {
  state: Boolean!
  message: String!
}

type Query {
  uploads: [File]
}

type Mutation {
  uploadFile(file: Upload!): SendStatus!
}
`;

export default typeDefs;