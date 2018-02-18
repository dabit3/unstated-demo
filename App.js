import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput
} from 'react-native';

import uuidV4 from 'uuid/v4'

import { Subscribe, Provider } from 'unstated'
import { BookContainer } from './BookContainer'
import { CounterContainer } from './CounterContainer'
import { LocationsContainer } from './LocationsContainer'
import AppContainer from './AppContainer'

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[BookContainer, CounterContainer, LocationsContainer]}>
          {(bookStore, counterStore, locationsStore) => (
            <AppContainer
              bookStore={bookStore}
              CounterContainer={CounterContainer}
              locationsStore={locationsStore}
            />
          )}
      </Subscribe>
    </Provider>
    );
  }
}
