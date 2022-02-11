import useSWR from 'swr'

export default function getProducts() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR('/api/products')

  return {
    products: data,
    isLoading: !error && !data,
    isError: error
  }
}
