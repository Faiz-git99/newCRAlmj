// importe le composant <CareScale />

import CareScale from './CareScale'

// importe le css de <PlantItem />
import '../styles/PlantItem.css'

function handleClick(e) {
    console.log('Ceci est mon event', e)
}

// composant < PlantItem />
function PlantItem({id, cover, name, water, light, price}) {


    return (
        <li key={id} className='lmj-plant-item' onClick={handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}

			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
    )
}


export default PlantItem; 