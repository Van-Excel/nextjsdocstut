let arr = ['name', 'age']


let [firstname, lastname] = arr


let options = {
    name: 'van',
    age: 23,
    location:{
        street: 'adenta',
        city: 'Accra'
    }
}


let {name, age, location} = options

console.log(location)


//function expression
// allows us to create functions in the middle of expressions
// means create a function and put it in the variable sayHi
let sayHi = function(){
    console.log('say hi');
};

sayHi()

let sayHi1 = (a, b) => {
    c = a + b;
    return c
}

console.log(sayHi1('hi', ' Ma'));
