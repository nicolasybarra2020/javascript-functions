// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parOImpar=(numero)=>{
    if(numero==='')return alert('Debes ingresar un numero')
    if(numero===null)return 0
    if(numero%2===0){console.log(`${numero} es par`)
}else{console.log(`${numero} es impar`)}
}

let num=prompt('Ingrese un numero para ver si es par o impar:')
parOImpar(num)


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const comparar=(numero1, numero2)=>{
    if((numero1===null) || (numero2 === null))return 0
    if((numero1==='') || (numero2 === ''))return alert('Debes completar los campos')

    if(numero1<numero2){
        console.log(`${numero2} es mayor que ${numero1}`)
    }else if(numero1>numero2){
        console.log(`${numero1} es mayor que ${numero2}`)
    }else{
        console.log('Los numeros son iguales')

}
    
}

let num1=prompt('Ingrese primer numero a comparar')
let num2=prompt('Ingrese segundo numero a comparar')

comparar(num1,num2)


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploCinco=(numero)=>{
    if((numero===null)||(numero===''))return alert('No se ha ingresado un número')
    if(numero<5)return console.log(`${numero} no es múltiplo de 5`)
    if(numero%5===0){
        console.log(`${numero} es múltiplo de 5`)
    }else{
        console.log(`${numero} no es múltiplo de 5`)
    }
}

num=prompt('Ingresa el número para ver si es múltiplo de 5:')
multiploCinco(num)


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.


const intervalo=(numero)=>{
    if((numero===null)||(numero===''))return alert('No se ha ingresado un número')
    for(let i=0;i<=numero;i++){
        console.log(i)
    }
}

num=prompt('Ingrese un número. Se imprimira desde 0 hasta ese número:')
intervalo(num)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.


const repetirPalabra=(palabra,numero)=>{
    if((palabra===null) || (numero === null))return 0
    if((palabra==='') || (numero === ''))return alert('Debes completar los campos')
    if((typeof(palabra)==='number')||(typeof(number)==='string'))return alert('El primer campo debe tener una palabra y el segundo debe tener un número')
    let i=1
    while(i<=numero){
        console.log(palabra)
        i++
    }
}

let palabra=prompt('Ingrese palabra a repetir:')
num=prompt('Ingrese la cantidad de veces que quiere repetir la palabra:')

repetirPalabra(palabra,num)


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const imprimirItems=(miArray)=>{
    if((miArray===null)||(miArray===''))return alert('No se ha ingresado ningún valor.')
    for(let i=0;i<miArray.length;i++){
        if(miArray[i]!==',') console.log(miArray[i])
    }
}


let miarray=prompt('Ingrese una lista de elementos separados por comas. Por consola se imprimirán:')

imprimirItems(miarray)


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const imprimirNum=(arrayNum)=>{
    for(let i=0;i<10;i++){
        if(i===4)continue
        console.log(arrayNum[i])
    }
}

let arraydenumeros=[]
for(let j=0;j<10;j++){
    arraydenumeros.push(prompt(`Ingrese el ${j+1}° número:`))
}
console.log('Ahora se imprimiran esos números menos el quinto.')
imprimirNum(arraydenumeros)


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.



const multiplicarValorArray=(numero,arrayNum)=>{
    let miArrayNumérico=arrayNum.split(',')
    for(let i=0;i<miArrayNumérico.length;i++){
        console.log(parseInt(miArrayNumérico[i])*numero)
    }
}

num=prompt('Ingrese un número,dicho valor sera multiplicado por cada uno de la lista de números que definirá a continuación:')
arraydenumeros=prompt('Ingrese una lista de números separados por comas:')
multiplicarValorArray(num,arraydenumeros)