export const fetchProducts = async url => {
  const response = await fetch(url, {
    method: 'GET'
  })

  const json = await response.json()
  return json
}
