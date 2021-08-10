import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBooks } from 'store/books/api';

export const Status = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Failure: 'failure'
};

export const fetchBooks = createAsyncThunk('books/fetchBooks',
  async ({search, startIndex = 0}, {rejectWithValue}) => {
  console.log('payload creator')
    try {
      const response = await getBooks(search, startIndex);
      const data = await response.json();

      return {...data, startIndex}
    } catch(err) {
      return rejectWithValue(err);
    }
  })

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    totalItems: 0,
    startIndex: 0,
    status: Status.Idle,
    error: null
  },
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      console.log('pending')

      if (!action.meta.arg.startIndex) {
        state.items = [];
      }

      state.error = null;
      state.status = Status.Loading;
    })
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const { items, totalItems, startIndex } = action.payload;
      const nextItems = startIndex ? state.items.concat(items) : items;



      state.items = nextItems?.filter(item => item)
      state.startIndex = nextItems?.length
      state.totalItems = totalItems;
      state.status = Status.Success;
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      console.log(action.type)

      state.status = Status.Failure;
      state.error = action.payload;
    })
  })
});

export default booksSlice.reducer;

export const selectBooks = (state) => state.books;
