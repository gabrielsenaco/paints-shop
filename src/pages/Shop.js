import ProductList from './../components/ProductList'

const Shop = ({ products }) => {
  return (
    <section className='shop-section'>
      <h3>Our paintings</h3>
      <ProductList products={products} />
    </section>
  )
}

export default Shop
