import React from 'react'
import IconFilter from 'components/SearchForm/IconFilter'

function LinkToFilter({toggle}) {
  return (
    <span
      onClick={toggle}
      className={styles.wrapper}
    >
      <IconFilter />
    </span>
  )
}

const styles = {
  wrapper: 'text-blue-500 hover:text-blue-700'
}

export default LinkToFilter
