export const fetchProducts = async (url) => {
  const response = await fetch(url, {
    method: 'GET'
  })

  const json = await response.json()
  return json
}

fetchProducts('https://res.cloudinary.com/gabes/raw/upload/v1632837746/paints_t2fg3h.json')