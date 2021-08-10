import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooks } from 'store/books'
import SearchForm from 'components/SearchForm'
import Books from 'pages/Result/components/Books'
import Pagination from 'pages/Result/components/Books/Pagination'
import Stack from 'components/Stack'
import Modal from 'components/modal'
import Filters from 'pages/Result/components/Filters'

function Result() {
  const dispatch = useDispatch()
  const { search } = useLocation()
  const { items } = useSelector(selectBooks)
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(prev => !prev);
  }

  useEffect(() => {
    if (!search) {
      return
    }

    dispatch(fetchBooks({ search }))
    // dispatch(fetchBooks( search ))

  }, [dispatch, search])

  return (
    <>
      <div className={styles.wrapper}>
        <Stack gaps={[0, 10, 20, 20]}>
          <SearchForm toggle={toggle} />
          <Books items={items} />
          {items ? <Pagination /> : <div>검색 결과가 없습니다.</div>}
        </Stack>
      </div>
      <Modal show={show} toggle={toggle} >
        <Filters toggle={toggle} />
      </Modal>
    </>

  )
}

const styles = {
  wrapper: 'pb-4'
}

export default Result
