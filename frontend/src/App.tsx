import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Devices from './View/Devices'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'


const client = new ApolloClient({
  uri: `http://${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}`
});
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Devices />
    </ApolloProvider>
  );
}

export default App;