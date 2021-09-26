import Logo from './Logo'
import { Link } from 'react-router-dom'
import uniqid from 'uniqid'

const FooterSection = ({ title, items, external_items }) => {
  items = items.map(item => {
    return (
      <li key={uniqid()}>
        {external_items && <a href={item.url}>{item.name}</a>}
        {!external_items && <Link to={item.url}>{item.name}</Link>}
      </li>
    )
  })

  return (
    <div className='footer-section'>
      <h5>{title}</h5>
      <ul>{items}</ul>
    </div>
  )
}

const Footer = () => {
  const contentItems = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Shop',
      url: '/shop'
    },
    {
      name: 'Support',
      url: '/support'
    }
  ]

  const socialMediaItems = [
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com'
    }
  ]

  const sourceItems = [
    {
      name: 'Repository',
      url: 'https://github.com/gabesenacom/paints-shop'
    },
    {
      name: "Author's Profile",
      url: 'https://github.com/gabesenacom/'
    }
  ]

  return (
    <footer>
      <Link to='/' className='logo'>
        <Logo />
      </Link>
      <FooterSection title='Content' items={contentItems} />
      <FooterSection
        title='Social media'
        items={socialMediaItems}
        external_items={true}
      />
      <FooterSection title='Source' items={sourceItems} external_items={true} />
    </footer>
  )
}

export default Footer
