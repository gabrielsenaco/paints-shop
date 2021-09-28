import { IconShoppingCartPlus } from '@tabler/icons'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Product from './Product'
import Button from './Button'
import './../styles/ProductDetailed.css'

const ProductDetailed = ({
  image,
  name,
  price,
  id,
  appendProductQuantity,
  productAddedNotifier
}) => {
  const [quantity, setQuantity] = useState(1)
  const history = useHistory()

  const handleCartSubmit = event => {
    event.preventDefault()
    if (appendProductQuantity) appendProductQuantity(id, quantity)
    if (productAddedNotifier) productAddedNotifier(id)
    history.push('/shop')
  }

  const updateQuantity = event => {
    const value = parseInt(event.target.value || 0)
    if (value < 1) return
    return setQuantity(value)
  }

  return (
    <form className='product-detailed' onSubmit={handleCartSubmit}>
      <Product image={image} name={name} price={price} id={id} />
      <label>
        Quantity:{' '}
        <input
          onChange={updateQuantity}
          type='number'
          name='quantity'
          value={quantity}
          className='product-cart-quantity'
        />
      </label>
      <Button type='submit' className='product-add-to-cart'>
        <IconShoppingCartPlus />
        Add to cart
      </Button>
    </form>
  )
}

export default ProductDetailed
