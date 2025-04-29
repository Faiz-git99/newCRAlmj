import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basilique from '../assets/basilique.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'


// Exporte le composant planteListe
export const plantList = [

    {
        // objet fleur monstera
        name : "monstera",
        category : "classique",
        id : "2ab",
        isSpecialOffer: true,
        light: 2,
        water: 3,
		cover: monstera,
        price : 15    
    },
    
    {
        // objet fleur ficus lyarata
        name : "ficus lyrata",
        category : "classique",
        id : "1eh",
        isSpecialOffer: true,
        light: 3,
        water: 1,
		cover: lyrata,
        price : 9
    },
    
    {
        // objet pothos argenté
        name : "pothos argenté",
        category : "classique",
        id : "3tr",
        isSpecialOffer: true,
        light: 1,
        water: 2,
		cover: pothos,
        price : 16
    },
    
    {
        // objet calathea
        name : "calathea",
        category : "classique",
        id : "2ms",
        light: 3,
        water: 1,
		cover: calathea, 
        price : 10
    },
    
    {
        // objet olivier
        name : "olivier",
        category : "tropical",
        id : "9mt",
        water : 2,
        cover: monstera,
        light : 3,
        cover : olivier,
        price : 8
    },

    {
        // objet cactus
        name : "cactus",
        category : "tropical",
        id : "1ed",
        light: 2,
        water: 3,
		cover: cactus,
        price : 18
    },

    {
        // objet succulente
        name : "succulente",
        category : "classique",
        id : "1ed",
        light: 2,
        water: 3,
		cover: succulent,
        price : 11
    },

    {
        // objet basilique
        name : "basilique",
        category : "classique",
        id : "1ed",
        light: 2,
        water: 3,
		cover: basilique,
        price : 9
    },

    {
        // objet menthe
        name : "menthe",
        category : "classique",
        id : "1ed",
        light: 2,
        water: 3,
		cover: mint,
        price : 12
    },

    
    ];
    
    
    
    