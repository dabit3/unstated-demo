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
import { BookStore, BookContainer } from './BookContainer'
import { CounterStore, CounterContainer } from './CounterContainer'
import { LocationsStore, LocationsContainer } from './LocationsContainer'
import AppContainer from './AppContainer'

export default class App extends Component {
  render() {
    return (
      <Provider inject={[BookStore, CounterStore, LocationsStore]}>
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
