import React, { Component } from 'react';
import { AppContainer } from './App.styles';
import Packet from './components/Packet/Packet';
import ClientServer from './components/ClientServer/ClientServer';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Packet />
      </AppContainer>
    );
  }
}

export default App;
