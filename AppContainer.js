import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native'

export default class AppContainer extends React.Component {
  state = {
    name: '',
    author: '',
    read: null
  }
  componentDidMount() {
    console.log('props: ', this.props)
    this.props.locationsStore.fetchLocations()
  }
  addBook(store) {
    store.addBook({
      ...this.state,
      id: uuidV4()
    })
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  render() {
    const { bookStore: { toggleVisibility, state: { books, showBooks } }  } = this.props
    console.log('locationsStore: ', this.props.locationsStore)
    const { state: { isFetching, locations }} = this.props.locationsStore
    console.log('isFetching: ', isFetching)
    console.log('locations: ', locations)
    return (
      <View>
        {
          showBooks && books.map((book, index) => {
            return (
              <View key={index}>
                <Text>{book.name}</Text>
                <Text
                  onPress={() => bookStore.toggleRead(book)}
                >{book.read ? 'Yes' : 'No'}</Text>
              </View>
            )
          })
        }
        <TextInput
          onChangeText={value => this.onChangeText('name', value)}
          style={styles.input}
        />
        <TextInput
          onChangeText={value => this.onChangeText('author', value)}
          style={styles.input}
        />
        <Button
          onPress={() => this.addBook(bookStore)}
          title="Add Book"
        />
         <Button
          onPress={toggleVisibility}
          title="Toggle Visibility"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 45,
    backgroundColor: '#ededed',
    paddingHorizontal: 15,
    margin: 10
  }
});
