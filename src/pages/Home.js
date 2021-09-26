import { Link } from 'react-router-dom'
import { getRandomArray } from './../utils.js'
import Banner from './../assets/banner.png'
import ProductList from './../components/ProductList'

const Home = ({ products }) => {
  products = getRandomArray(products).slice(0, 4)
  return (
    <section>
      <Link to='/shop'>
        <img src={Banner} alt='Banner' />
      </Link>
      <h3>Some Paintings</h3>
      <ProductList products={products} />
      <Link to='/shop' className='push-link'>
        click here to check all paints
      </Link>
    </section>
  )
}

export default Home
