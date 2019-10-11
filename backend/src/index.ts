import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { resolvers, typeDefs } from './GraphQL';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const app = express();
//Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

createConnection().then(() => {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
