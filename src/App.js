import { useParams } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'
import uniqid from 'uniqid'
import Paints from './paints/paints.json'
import { getRandomArray } from './utils.js'
import Header from './components/Header'
import Footer from './components/Footer'
import CartNotifier from './components/CartNotifier'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Support from './pages/Support'
import ShoppingCart from './pages/ShoppingCart'

function generateProducts () {
  return Paints.map(paint => {
    return {
      ...paint,
      id: paint.name.replaceAll(' ', '-').concat('-', uniqid())
    }
  })
}

const App = () => {
  const [products] = useState(getRandomArray(generateProducts()))
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
