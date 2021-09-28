import { Link } from 'react-router-dom'
import { IconX } from '@tabler/icons'
import './../styles/CartNotifier.css'

const CartNotifier = ({ lastProduct, clearLastProduct }) => {
  if (!lastProduct) return null
  return (
    <div className='cart-notifier'>
      <div>
        <p>
          Product {lastProduct.name} added on your cart.{' '}
          <Link to='/shopping-cart' onClick={clearLastProduct}>
            Click here to check.
          </Link>
        </p>
      </div>
      <IconX onClick={clearLastProduct} className='close-notification' />
    </div>
  )
}

export default CartNotifier
