import { stringifyUrl, parse } from 'query-string'

const PATH = {
  books: 'https://www.googleapis.com/books/v1/volumes'
}

export async function getBooks(search, startIndex) {
  const { q, ...rest } = parse(search)
  const input = stringifyUrl({
    url: PATH.books,
    query: {
      q: `${q}`,
      startIndex,
      projection: 'full',
      ...rest
    }
  })

  return fetch(input)
}
