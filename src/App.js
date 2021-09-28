import { useParams } from 'react-router-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import { getRandomArray } from './utils.js'
import Header from './components/Header'
import Footer from './components/Footer'
import CartNotifier from './components/CartNotifier'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Support from './pages/Support'
import ShoppingCart from './pages/ShoppingCart'
import { fetchProducts } from './api/query_products'

const PRODUCTS_URL =
  'https://res.cloudinary.com/gabes/raw/upload/v1632837746/paints_t2fg3h.json'

const createProducts = async () => {
  const products = await fetchProducts(PRODUCTS_URL)

  return products.map(product => {
    /* TO-DO: We can later remove this id setup. We can configure to expect each product to have its own unique id.
      Why? 
        1. In a real e-commerce application, the user usually saves the product link in the browser's favorites to purchase it later. If the real application sets the product id on the front-end, the saved link will be lost.
        2. The application may be slow if there are too many products to iterate.
    */
    return {
      ...product,
      id: product.name
        .replaceAll(' ', '-')
        .concat('-', uniqid())
        .toLowerCase()
    }
  })
}

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    createProducts().then(data => setProducts(getRandomArray(data)))
  }, [])

  const [cart, setCart] = useState([])
  const [lastProduct, setLastProduct] = useState(null)

  const isSameProduct = (id1, id2) => {
    return id1.toLowerCase() === id2.toLowerCase()
  }

  const updateItemQuantity = (id, quantity) => {
    setCart(cart => {
      return cart.map(prod => {
        if (!isSameProduct(prod.id, id)) return prod
        const newQuantity = prod.quantity + quantity
        return {
          ...prod,
          quantity: newQuantity
        }
      })
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const removeProduct = id => {
    setCart(prevCart => prevCart.filter(prod => !isSameProduct(prod.id, id)))
  }

  const addProduct = (id, quantity = 1) => {
    let product = products.filter(prod => isSameProduct(prod.id, id))[0]
    if (!product) return

    setCart(prevCart => {
      return prevCart.concat({
        ...product,
        quantity
      })
    })
  }

  const reduceProductQuantity = (id, quantity) => {
    let product = cart.filter(prod => isSameProduct(prod.id, id))[0]
    if (!product) return
    if (product.quantity <= quantity) {
      removeProduct(id)
    } else {
      updateItemQuantity(id, -Math.abs(quantity))
    }
  }

  const appendProductQuantity = (id, quantity) => {
    let product = cart.filter(prod => isSameProduct(prod.id, id))[0]
    if (!product) {
      return addProduct(id, quantity)
    }
    updateItemQuantity(id, Math.abs(quantity))
  }

  const productAddedNotifier = id => {
    const product = products.filter(product => isSameProduct(product.id, id))[0]
    setLastProduct(product)
  }

  const clearLastProduct = () => {
    setLastProduct(null)
  }

  const getCartLength = () => {
    return cart.reduce((total, now) => {
      return (total += now.quantity)
    }, 0)
  }

  return (
    <Router>
      <Header cartLength={getCartLength()} />
      <CartNotifier
        lastProduct={lastProduct}
        clearLastProduct={clearLastProduct}
      />
      <Switch>
        <Route exact path='/'>
          <Home
            products={products}
            appendProductQuantity={appendProductQuantity}
            productAddedNotifier={productAddedNotifier}
          />
        </Route>
        <Route exact path='/support' component={Support} />
        <Route exact path='/shop'>
          <Shop
            products={products}
            appendProductQuantity={appendProductQuantity}
            productAddedNotifier={productAddedNotifier}
          />
        </Route>
        <Route path='/shop/product/:productId'>
          <ProductDetailsWrapper
            products={products}
            appendProductQuantity={appendProductQuantity}
            productAddedNotifier={productAddedNotifier}
          />
        </Route>
        <Route exact path='/shopping-cart'>
          <ShoppingCart
            cartItems={cart}
            appendProductQuantity={appendProductQuantity}
            removeProduct={removeProduct}
            reduceProductQuantity={reduceProductQuantity}
            clearCart={clearCart}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

const ProductDetailsWrapper = ({
  products,
  appendProductQuantity,
  productAddedNotifier
}) => {
  const { productId } = useParams()

  const product = products.filter(
    prod => prod.id.toLowerCase() === productId.toLowerCase()
  )[0]

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <ProductDetails
      image={product.image}
      name={product.name}
      price={product.price}
      id={product.id}
      appendProductQuantity={appendProductQuantity}
      productAddedNotifier={productAddedNotifier}
    />
  )
}

export default App
