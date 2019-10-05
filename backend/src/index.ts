import express from 'express';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { InitServer, InitEnv } from './Util';
import { resolvers, typeDefs } from './GraphQL';

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Initialize Environment variables
InitEnv();

//Create Apollo Server
const apollo = new ApolloServer({ typeDefs, resolvers })
apollo.applyMiddleware({ app })

// Create Server with HTTPS
const { server, config } = InitServer(app);
server.listen({ port: config.port }, () =>
  console.log('Server ready at',
    `http${config.ssl ? 's' : ''}://${config.hostname}:${config.port}${apollo.graphqlPath}`
  )
)