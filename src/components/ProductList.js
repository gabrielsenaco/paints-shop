import ProductCard from './ProductCard'

const ProductList = ({products, appendCartHandler, productAddedNotifier}) => {
  products = products.map((product) => {
    return <ProductCard image={product.image} name={product.name} price={product.price} id={product.id} appendCartHandler={appendCartHandler} productAddedNotifier={productAddedNotifier} key={product.id} />
  })
  return (
      <ul className='product-list'>
        {products}
      </ul>
    )
}

export default ProductList
