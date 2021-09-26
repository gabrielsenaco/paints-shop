import { IconTrash } from '@tabler/icons'

const CartItem = ({image, name, price, id, quantity, appendProductQuantity, reduceProductQuantity, removeProduct}) => {


  const appendProductHandler = () => {
   // appendProductQuantity(id, 1)
   console.log('append product')
  }

  const reduceProductHandler = () => {
    // reduceProductQuantity(id, 1)
    console.log('reduce product')
  }

  const removeProductHandler = () => {
    // removeProduct(id)
    console.log('remove product')
  }

  return (
      <div>
        <img className='cart-product-image' src={image} alt={name} />
        <p className='cart-product-name'>{name}</p>
        <p className='cart-product-price'>{price}</p>
        <p className='cart-product-quantity'>{quantity}</p>
        <div className='cart-item-actions'>
          <small onClick={appendProductHandler} className='cart-item-action'>+1</small>
          <small onClick={reduceProductHandler} className='cart-item-action'>-1</small>
          <IconTrash onClick={removeProductHandler} className='cart-item-action'/>
        </div>
      </div>
    )
}

export default CartItem
