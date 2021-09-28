import { Link } from 'react-router-dom'
import ProductDetailed from './../components/ProductDetailed'
import { useScrollTop } from './../utils'
import './../styles/ProductDetails.css'

const ProductDetails = ({
  image,
  name,
  price,
  id,
  appendProductQuantity,
  productAddedNotifier
}) => {
  useScrollTop()

  return (
    <section className='product-details-section'>
      <Link to='/shop' className='push-link'>
        back to product list
      </Link>
      <ProductDetailed
        image={image}
        name={name}
        price={price}
        id={id}
        appendProductQuantity={appendProductQuantity}
        productAddedNotifier={productAddedNotifier}
      />
    </section>
  )
}

export default ProductDetails
