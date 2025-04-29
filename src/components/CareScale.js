import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'



// Déclare le composant <CareScale />
function CareScale({scaleValue, careType}){

    // LA MÉTHODE DE DESTRUCTURATION
    /* permet de  récupérer une variable qui prend une valeur d'une proprété d'objet
    cela évite d'écrire les mêmes codes à chaque fois
    au lieu d'écrire 
    const scaleValue = props.scaleValue et const careType = props.careType
    on aura const {scaleValeur, careType} = props */
    
    // on peut insérer directement les props dans les paramètres de fonction de composant
    // sous forme d'accolades {}

    
    const nmbEscalier = [1, 2, 3];

    const scaleType = careType === 'light' ? 
    (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

    function handlemessage(typeplante) { 
        careType === 'light' ? 
        alert(`Cette plante de type ${typeplante} requiert beaucoup de soleil`) : 
        alert(`Cette plante de type ${typeplante} requiert modérement de l'eau`)
    }


    return(
        <div>
        {nmbEscalier.map((marcheEscalier) => 
        scaleValue >= marcheEscalier ? (<span key=
        {marcheEscalier.toString()}>{scaleType}</span>) : null)}

        <button onClick={() => handlemessage(careType)}> message affiché</button>
        </div>
    )
}

export default CareScale ;