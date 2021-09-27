import ProductList from './../components/ProductList'

const Shop = ({ products, appendProductQuantity, productAddedNotifier }) => {
  return (
    <section className='shop-section'>
      <h3>Our paintings</h3>
      <ProductList
        products={products}
        appendProductQuantity={appendProductQuantity}
        productAddedNotifier={productAddedNotifier}
      />
    </section>
  )
}

export default Shop
