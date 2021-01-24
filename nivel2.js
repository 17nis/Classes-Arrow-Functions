let a= 5;

const suma = function(a) {
    let obj = {param: a};
    console.log(obj)
    return obj;
}(a)

console.log(suma);

// (function(a) {
//     let obj = {param: a};
//     console.log(obj)
//     return obj;
// }(a))