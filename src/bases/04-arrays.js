

/* const arreglo = new Array(100); */
const arreglo = [1,2,3,4]

arreglo.push( 5 )

const arreglo2 = [ ...arreglo ] 
arreglo2.push( 6 )

const arreglo3 = arreglo2.map( function( n ){ 

    return n * 10

})

/* const arreglo3 = arreglo2.map( multi = ( n ) => { 
    función de flechas

    return n * 10;

}) */

console.log( arreglo )
console.log( arreglo2 )
console.log( arreglo3 )