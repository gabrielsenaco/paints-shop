import { IconTrash, IconCheck } from '@tabler/icons'
import { useHistory } from 'react-router-dom'
import Button from './../components/Button'
import CartItem from './../components/CartItem'
import CartItemLabel from './../components/CartItemLabel'
import { useScrollTop } from './../utils'
import './../styles/ShoppingCart.css'

const ShoppingCart = ({
  cartItems,
  clearCart,
  appendProductQuantity,
  reduceProductQuantity,
  removeProduct
}) => {
  useScrollTop()

  const history = useHistory()

  const clearCartHandler = () => {
    clearCart()
  }

  const onConfirmPayment = event => {
    event.preventDefault()
    clearCart()
    history.push('/')
  }

  const productsTotalQuantity = cartItems.reduce((total, product) => {
    total += product.quantity
    return total
  }, 0)

  const productsTotalPrice = cartItems.reduce((total, product) => {
    total += product.price * product.quantity
    return total
  }, 0)

  cartItems = cartItems.map(item => {
    return (
      <CartItem
        image={item.image}
        name={item.name}
        price={item.price}
        id={item.id}
        key={item.id}
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
        <div className='cart-summary-container'>
          <p className='cart-summary'>{`${productsTotalQuantity} ${
            productsTotalQuantity > 1 ? 'products' : 'product'
          }. Total: $ ${productsTotalPrice}`}</p>
          <Button
            type='button'
            onClick={clearCartHandler}
            className='clear-cart-btn'
          >
            <IconTrash /> Clear Cart
          </Button>
        </div>

        <ul className='shipping-cart-items'>
          {cartItems.length > 0 && <CartItemLabel />}
          {cartItems}
        </ul>

        <Button type='submit' className='confirm-payment-button'>
          <IconCheck /> Confirm Payment
        </Button>
      </form>
    </section>
  )
}

export default ShoppingCart
