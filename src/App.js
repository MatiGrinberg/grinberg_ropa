import './estilados/App.css'
import React, { useEffect, useState, useContext} from 'react'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout'
import {CartContext } from './components/Context/Context';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import {db} from './components/Firebase/Firebase'


function App() {
  
  // ItemCollection de FireStore (todos los productos)
  const [products, setProducts] = useState([])

  const ref = db.collection("ItemCollection")

  function getProducts() {
    // setProducts
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
    });

  }

  useEffect(() => {
    getProducts();
  }, []);

  // CartItems
  const {cartItems, setCartItems} = useContext(CartContext);  
  const count = cartItems.reduce((a, c) => a + c.qty , 0)

// Funciones
const onAddFirst = (product) =>{
  const exist = cartItems.find(item =>item.id === product.id)
  if(exist){ }
  else{setCartItems([...cartItems,{...product, qty:1}])}
}

const onAdd = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist) {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};

const onRemove = (product) => {
  const exist = cartItems.find((item) => item.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  } else {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      )
    );
  }
};

//  Return  
  return (
    
      <Router>
          <div className="App">
              <Route exact path="/">
                <NavBar countCartItems={count}/>
                <ItemListContainer products={products}/>
              </Route>
              <Route exact path="/category">
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <ItemDetailContainer products={products}/>
              </Route>

              <Route path="/:ropa_id/:ropa_id">
                <NavBar countCartItems={count}/>
                <ItemDetail onAdd={onAdd} onAddFirst={onAddFirst} onRemove={onRemove} cartItems={cartItems}/>
              </Route>


              <Route exact path="/checkout">
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <Checkout cartItems={cartItems}  setCartItems={setCartItems}/>
              </Route>
              <Route exact path="/cart">
                <Link to='/' className='header_link'>
                    <h1 className='inicio'> CLICK PARA IR A INICIO</h1>
                </Link>
                <Cart onAdd={onAdd} onRemove={onRemove}/>
              </Route>
          </div>
          </Router>
          
  );
};

export default App
