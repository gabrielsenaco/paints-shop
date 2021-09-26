import Product from './Product'
import { IconShoppingCartPlus } from '@tabler/icons'

const ProductCard = ({ image, name, price, id, appendCartHandler, productAddedNotifier }) => {

  const handleCartClick = () => {
    alert('product added')
    // call to top level append cart handler to add a product
    if(appendCartHandler) appendCartHandler(id, 1)
    //call to top level notify user that product is added
    if(productAddedNotifier) productAddedNotifier(id, 1)
  }

  return (
    <div className='product-card'>
      <Product
        image={image}
        name={name}
        price={price}
        id={id}
      />
      <IconShoppingCartPlus onClick={handleCartClick}/>
    </div>
  )
}

export default ProductCard
