import { Link } from 'react-router-dom'
import ProductDetailed from './../components/ProductDetailed'

const ProductDetails = ({
  image,
  name,
  price,
  id,
  appendCartHandler,
  productAddedNotifier
}) => {
  return (
    <section className='product-details-section'>
      <Link to='/shop' className='push-link'>
        back to product list
      </Link>
      <ProductDetailed
        image={image}
        price={price}
        id={id}
        appendCartHandler={appendCartHandler}
        productAddedNotifier={productAddedNotifier}
      />
    </section>
  )
}

export default ProductDetails
