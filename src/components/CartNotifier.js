import { Link } from 'react-router-dom'
import { IconX } from '@tabler/icons'

const CartNotifier = ({ productName, clearLastProduct }) => {
  if (!productName) return null
  return (
    <div className='cart-notifier'>
      <div>
        <p>Product {productName} added on your cart.</p>
        <Link to='/shopping-cart'>
          <p>Click here to check.</p>
        </Link>
      </div>
      <IconX onClick={clearLastProduct} />
    </div>
  )
}

export default CartNotifier
