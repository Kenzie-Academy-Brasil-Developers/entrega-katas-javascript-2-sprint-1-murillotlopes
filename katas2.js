// comece a criar a sua função add na linha abaixo
console.log(add(2,4))
console.log(multiply(3,4))
console.log(power(3,4))
console.log(factorial(7))
console.log(fibonacci(7))


function add(n1, n2){
    return n1+n2
}



// descomente a linha seguinte para testar sua função
//console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(n1,n2){
    let m = 0
    for(let i=0; i<n2; i++){
        m = add(m,n1)
    }
    return m
}


// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// comece a criar a sua função power na linha abaixo
function power(b,e){
    let p = b
    for (let i=1; i< e; i++){
        p = multiply(p,b)
    }
    return p
}


// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(f){
    let fat = f
    for(let i = f-1; i>0; i--){
        fat = multiply(fat,i)
    }
    if (fat === 0){
        fat = 1
    }
    return fat
}

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(fb){
    let a=0, b=1, seq=[0,1]

    for(let i=0; i<fb; i++){
       if (a <= b){
           a = add(a,b)
           seq.push(a)

       }else if( b < a){
           b = add (b,a)
           seq.push(b)
       }
    }

    return seq[fb]
}


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
