import React from 'react'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Devices from './View/Devices'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache
});
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Devices />
    </ApolloProvider>

  );
}

export default App;