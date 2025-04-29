import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import Time from './Time.js'

// importe le logo dans <App /> quand on utilise la prop children
import logo from '../assets/logo.png'

// le css de layout adapté au composant <Cart /> et <Shopping />
import '../styles/Layout.css'

import { useState, useEffect  } from 'react';

function App() {

  const savedCart = localStorage.getItem('cart')
  console.log(savedCart);
  
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


  const [isFooterShown, updateIsFooterShown] = useState(true)
 

  return (
    <div className="App">
        <Banner>
          <img src={logo} alt='La maison jungle' className='lmj-logo'/>
          <h1 className='lmj-titre'>La maison jungle</h1>
          <Time />
        </ Banner>

      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart}/>
        <ShoppingList cart={cart} updateCart={updateCart} />

        <button onClick={() => updateIsFooterShown(!isFooterShown)}>
					Cacher !
				</button>
      </div>

      {isFooterShown && <Footer cart={cart} />}
    </div>
  );
}

export default App;
