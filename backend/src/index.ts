import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './GraphQL';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  cacheControl: true,
})

createConnection().then(() => {
  server.listen().then(() => console.log('Server is running on http://localhost:4000'));
});
