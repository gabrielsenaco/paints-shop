import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { IconShoppingCart } from '@tabler/icons'
import '../styles/Header.css'

const Header = ({ cartLength }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      <nav className='header-navbar'>
        <li>
          <NavLink exact to='/' activeClassName='selected'>
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
        <NavLink
          to='/shopping-cart'
          activeClassName='cart selected'
          className='cart'
        >
          <IconShoppingCart />
        </NavLink>
        <small>{cartLength || 0}</small>
      </div>
    </header>
  )
}

export default Header
