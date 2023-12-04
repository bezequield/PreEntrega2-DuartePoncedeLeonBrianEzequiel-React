 export const products = [

{id:'1', name:'Fitness & Green' , category:'meat-free' , price:5400 , stock:30 , description:'Huevo escalfado con tostadas, paltas, chauchas ahumadas & lluvia de semillas.' , imgUrl:'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno1.jpg' }, 
{id:'2', name:'Protein & Fruit' , category:'meat-free' , price:6500 , stock:25 , description:'Manzanas con cítricos, frutos rojos & yogurt griego sobre un colchon de granix.' , imgUrl:'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno2.jpg'},
{id:'3', name:'Good Morning America' , category:'traditional' , price:4500 , stock:20 , description:'Huevos a la plancha con bacon, pancakes & butter y rice croquettes.', imgUrl: 'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno3.jpg'},
{id:'4', name:'Pancakes & Caramel' , category:'meat-free', price:3500 , stock:15 , description:'Torre de 6 pancakes con caramelo, sobre colchon de frutos rojos.' , imgUrl: ' https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno4.jpg'},
{id:'6', name:'Yankee Breakfast' , category:'traditional' , price:3000 , stock:15 , description:'Salchichas parrilleras con huevos a la plancha.', imgUrl: 'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno6.jpg'},
{id:'7', name:'Kiwi con banana, arándanos sobre un colchón de avena.', category:'meat-free' , price:5500 , stock:10 , description:'Kiwi con banana, arándanos sobre un colchón de avena.' , imgUrl:'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno7.jpg'},
{id:'8', name:'Red Breakfast' , category:'meat-free' , price:3000 , stock:10 , description:'Tazón de avena dulce con frutos rojos y yogurt.' , imgUrl:'https://bezequield.github.io/PF-JavaScript-MenuOnline/img/desayuno8.jpg'}

]

export const mFetch = (id) => new Promise((res, rej) => {
        setTimeout(() => {
            res( id ? products.find (product => product.id === id) : products)
        }, 1000);
    })