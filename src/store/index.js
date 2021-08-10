import { configureStore } from '@reduxjs/toolkit'
import search from 'store/search'
import books from 'store/books'

export default configureStore({
  reducer: {
    search,
    books
  }
})
