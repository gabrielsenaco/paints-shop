import { IconTrash, IconCheck } from '@tabler/icons'
import { useHistory } from 'react-router-dom'
import Button from './../components/Button'
import CartItem from './../components/CartItem'

const ShoppingCart = ({
  cartItems,
  clearCart,
  appendProductQuantity,
  reduceProductQuantity,
  removeProduct
}) => {
  const history = useHistory()

  const clearCartHandler = () => {
    clearCart()
  }

  const onConfirmPayment = event => {
    event.preventDefault()
    clearCart()
    history.push('/')
  }

  const appendReducer = appendKey => {
    return cartItems.reduce((total, now) => {
      total += now[appendKey]
      return total
    }, 0)
  }

  const productsTotalQuantity = appendReducer('quantity')
  const productsTotalPrice = appendReducer('price')

  cartItems = cartItems.map(item => {
    return (
      <CartItem
        image={item.image}
        name={item.name}
        price={item.price}
        id={item.id}
        quantity={item.quantity}
        appendProductQuantity={appendProductQuantity}
        reduceProductQuantity={reduceProductQuantity}
        removeProduct={removeProduct}
      />
    )
  })

  return (
    <section className='shopping-cart-section'>
      <form onSubmit={onConfirmPayment}>
        <h3>Shopping Cart</h3>
        <div>
          <p>{`${productsTotalQuantity} products. Total: ${productsTotalPrice}`}</p>
          <Button type='button' onClick={clearCartHandler}>
            <IconTrash /> Clear Cart
          </Button>
        </div>
        <Button type='submit'>
          <IconCheck /> Confirm Payment
        </Button>
      </form>
    </section>
  )
}

export default ShoppingCart
