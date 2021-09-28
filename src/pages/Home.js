import { Link } from 'react-router-dom'
import Banner from './../assets/banner.png'
import ProductList from './../components/ProductList'
import { useScrollTop } from './../utils'
import './../styles/sections.css'
import './../styles/Home.css'

const Home = ({ products, appendProductQuantity, productAddedNotifier }) => {
  useScrollTop()

  products = products.slice(0, 4)
  return (
    <section className='home-section'>
      <Link to='/shop' className='banner'>
        <img src={Banner} alt='Banner' />
      </Link>
      <h3>Some Paintings</h3>
      <ProductList
        products={products}
        appendProductQuantity={appendProductQuantity}
        productAddedNotifier={productAddedNotifier}
      />
      <Link to='/shop' className='push-link'>
        click here to check all paints
      </Link>
    </section>
  )
}

export default Home
