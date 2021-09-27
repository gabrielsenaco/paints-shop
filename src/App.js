import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
//import ProductDetails from './pages/ProductDetails'
import Support from './pages/Support'
import ShoppingCart from './pages/ShoppingCart'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home products={[{ image: '3', name: '4', price: 3, id: 'f' }]} />
        </Route>
        <Route exact path='/support' component={Support} />
        <Route exact path='/shop'>
          <Shop products={[{ image: '3', name: '4', price: 3, id: 'f' }]} />
        </Route>
        <Route exact path='/shopping-cart'>
          <ShoppingCart cartItems={[]} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
