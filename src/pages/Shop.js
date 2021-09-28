import ProductList from './../components/ProductList'
import { useScrollTop } from './../utils'
import './../styles/Shop.css'

const Shop = ({ products, appendProductQuantity, productAddedNotifier }) => {
  useScrollTop()

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
