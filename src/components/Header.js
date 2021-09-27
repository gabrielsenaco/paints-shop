import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons'
import '../styles/Header.css'

const Header = ({ cartLength }) => {
  return (
    <header>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
      <nav className='header-navbar'>
        <li>
          <NavLink to='/' activeClassName='selected'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/shop' activeClassName='selected'>
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to='/support' activeClassName='selected'>
            Support
          </NavLink>
        </li>
      </nav>
      <div className='header-cart-container'>
        <small>{cartLength || 0}</small>
        <NavLink to='/shopping-cart' activeClassName='selected'>
          <IconShoppingCart />
        </NavLink>
      </div>
    </header>
  )
}

export default Header
