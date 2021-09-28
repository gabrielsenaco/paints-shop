import ProductCard from './ProductCard'
import './../styles/ProductList.css'

const ProductList = ({
  products,
  appendProductQuantity,
  productAddedNotifier
}) => {
  products = products.map(product => {
    return (
      <ProductCard
        image={product.image}
        name={product.name}
        price={product.price}
        id={product.id}
        appendProductQuantity={appendProductQuantity}
        productAddedNotifier={productAddedNotifier}
        key={product.id}
      />
    )
  })
  return <ul className='product-list'>{products}</ul>
}

export default ProductList
