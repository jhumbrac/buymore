import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Index from "./components/Index";
import Cart from "./components/Cart";
import SearchResults from './components/SearchResults';
import SearchContext from './utils/SearchContext';
import ProductsContext from './utils/ProductsContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, setProducts }}>
      <ProductsContext.Provider value={products}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={"/"} component={SearchResults} />
            <Route exact path={"/cart"} component={Cart} />
            <Route exact path={"/search"} component={SearchResults} />
          </Switch>
        </Router>
      </ProductsContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
