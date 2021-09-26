import Header from './components/Header'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'

import {
  BrowserRouter as Router
} from 'react-router-dom'

const App = () => {
  return (
      <Router>
         <Header />
         <Footer />
         <ProductCard image="e" name="Prod1" price="500" id="prod1" />
      </Router>
    )
}

export default App;
