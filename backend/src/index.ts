import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './GraphQL';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
})
createConnection().then(() => {
  server.listen().then(({url}) => console.log(`Server is running on: ${url}`));
});
