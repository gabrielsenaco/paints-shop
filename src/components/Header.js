import Logo from './Logo'
import { Link } from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons'

const Header = ({ cartLength }) => {
  return (
    <header>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
      <nav className='header-navbar'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/support'>Support</Link>
        </li>
      </nav>
      <div className='header-cart-container'>
        <small>{cartLength || 0}</small>
        <Link to='/shopping-cart'>
          <IconShoppingCart />
        </Link>
      </div>
    </header>
  )
}

export default Header
