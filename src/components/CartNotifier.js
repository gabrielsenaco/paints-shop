import { Link } from 'react-router-dom'
import { IconX } from '@tabler/icons'

const CartNotifier = ({ lastProduct, clearLastProduct }) => {
  if (!lastProduct) return null
  return (
    <div className='cart-notifier'>
      <div>
        <p>Product {lastProduct.name} added on your cart.</p>
        <Link to='/shopping-cart'>
          <p>Click here to check.</p>
        </Link>
      </div>
      <IconX onClick={clearLastProduct} />
    </div>
  )
}

export default CartNotifier
