import { IconShoppingCartPlus } from '@tabler/icons'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Product from './Product'
import Button from './Button'

const ProductDetailed = ({ image, name, price, id, appendCartHandler, productAddedNotifier }) => {

  const [quantity, setQuantity] = useState(0)
  const history = useHistory()

  const handleCartSubmit = (event) => {
    event.preventDefault()
    alert('product added 2'+ quantity)
    // call to top level append cart handler to add a product
    if(appendCartHandler) appendCartHandler(id, quantity)
    //call to top level notify user that product is added
    if(productAddedNotifier) productAddedNotifier(id, quantity)
    history.push('/shop')
  }

  const updateQuantity = (event) => setQuantity(parseInt(event.target.value || 0))
  
  return (
    <form className='product-detailed' onSubmit={handleCartSubmit}>
      <Product
        image={image}
        name={name}
        price={price}
        id={id}
      />
      <label>
      Quantity: <input onChange={updateQuantity} type='number' name='quantity' value={quantity}/>
      </label>
      <Button type='submit'><IconShoppingCartPlus />Add to cart</Button>
      
    </form>
    )
}

export default ProductDetailed