// importe le state 
import { useState, useEffect } from 'react'

// importe le css de Cart
import '../styles/Cart.css'

function Cart({cart, updateCart}) {

    // LA MÉTHODE DE DÉCOMPOSITION
    /* Cela permet de récupérer une variable sous forme de tableau
    un tableau qui prend 2 valeurs : une la valeur actuelle et 
    l'autre la valeur qui va modifier la valeur actuelle */

    const [isOpen, setIsOpen] = useState(true)
    


    const total = cart.reduce((acc, plantType) => 
        acc + plantType.amount * plantType.price, 0)



useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`
}, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button 
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}>Fermer
            </button>
            
            {cart.length > 0 ? (
				<div>

					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>

					<h3>Total :{total}€</h3>
					    <button onClick={() => updateCart([])}>
                            Vider le panier
                        </button>

				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>

	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

    export default Cart;