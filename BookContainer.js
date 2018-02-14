import {Container} from 'unstated'

class BookContainer extends Container {
  state = {
    books: [],
    showBooks: true
  }
  addBook = book => {
    const books = [...this.state.books]
    books.push(book)
    this.setState({ books });
  }
  toggleVisibility = () => {
   this.setState({
    showBooks: !this.state.showBooks
   })
  }
  toggleRead = book => {
    const bookIndex = this.state.books.findIndex(item => book.id === item.id)
    book = {
      ...book,
      read: !book.read
    }
    const books = [...this.state.books]
    books[bookIndex] = book
    this.setState({ books })
  }
}

const BookStore = new BookContainer()

export {
  BookStore,
  BookContainer
}