// console.log("Hello From Node.js");

// const fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

// console.log(fruits.map(fruit => {
//     if (fruit === ' ') {
//         fruit = 'empty string'
//     }

//     return fruit;
// }))


// const obj1 = { 'key1': 1, 'key2': 2 }

// const obj2 = { ...obj1, key1: 1000 }



// console.log(obj1)

// console.log(obj2)

{
    const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }

    const { key1, key3 } = { ...obj1 }



    console.log(key1, key3)

}
{
    const arr1 = ['value1', 'value2']

    const [val1, val2] = arr1



    console.log(val1)

    console.log(val2)


} {
    const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }

    let { key1, key3 } = obj1



    key1 = 20;

    key3 = 123

    console.log(obj1.key1, obj1.key3)
}
// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 3000)

// setTimeout(() => console.log('d'), 0)

// console.log('e');

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// async function printSequence() {
//     console.log('a');
//     console.log('b');

//     await delay(3000);
//     console.log('c');
//     console.log('d');

//     await delay(0);
//     console.log('e');
// }

// printSequence();


const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Abhishek Mishra');
    console.log(req)

})

server.listen(4000);