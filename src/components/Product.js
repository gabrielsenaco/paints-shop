import { Link } from 'react-router-dom'

const Product = ({ image, name, price, id }) => {

  return (
    <div className='product'>
      <Link to={`/shop/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default Product