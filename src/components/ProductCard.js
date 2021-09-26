import { Link } from 'react-router-dom'
import { IconShoppingCartPlus, IconCheck } from '@tabler/icons'
import {useState, useEffect} from 'react'

const ProductCard = ({ image, name, price, id, appendCartHandler }) => {
  
  const [isCartUpdate, setIsCartUpdate] = useState(false)
  const [cardTimeout, setCardTimeout] = useState(0)

  const handleCartClick = event => {
    event.stopPropagation()
    if(isCartUpdate) return
      
    setIsCartUpdate(true)
    const timeout = setTimeout(() => setIsCartUpdate(false), 1000)
    setCardTimeout(timeout)

    if (appendCartHandler) appendCartHandler(id, 1)
  }

  useEffect(() => {
    return () => clearTimeout(cardTimeout)
  })

  return (
    <div className='product-card'>
      <Link to={`/shop/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <div>
          <h4>{name}</h4>
          <p>{price}</p>
        </div>
        {!isCartUpdate && <IconShoppingCartPlus onClick={handleCartClick} />}
        {isCartUpdate && <IconCheck onClick={handleCartClick} />}
      </div>
    </div>
  )
}

export default ProductCard
