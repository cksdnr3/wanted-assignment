import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks, fetchBooks, Status } from 'store/books'
import { useLocation } from 'react-router-dom'
import Loading from 'components/Loading'

function Pagination() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { status, startIndex } = useSelector(selectBooks)
  const isLoading = status === Status.Loading

  const handleFetchBooks = () => {
    if (isLoading) {
      return
    }
    dispatch(fetchBooks({search, startIndex}))
    // dispatch(fetchBooks(search, startIndex))
  }

  return (
    <button
      className={styles.button}
      disabled={startIndex === 0 || isLoading}
      onClick={handleFetchBooks}
    >
      {isLoading ? <Loading /> : '더보기'}
    </button>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination
