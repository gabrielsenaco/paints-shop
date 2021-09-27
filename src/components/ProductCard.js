import Product from './Product'
import { IconShoppingCartPlus } from '@tabler/icons'

const ProductCard = ({
  image,
  name,
  price,
  id,
  appendProductQuantity,
  productAddedNotifier
}) => {
  const handleCartClick = () => {
    if (appendProductQuantity) appendProductQuantity(id, 1)
    if (productAddedNotifier) productAddedNotifier(id)
  }

  return (
    <div className='product-card'>
      <Product image={image} name={name} price={price} id={id} />
      <IconShoppingCartPlus onClick={handleCartClick} />
    </div>
  )
}

export default ProductCard
