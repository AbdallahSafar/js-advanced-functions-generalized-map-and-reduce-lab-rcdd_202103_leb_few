// Add your functions here
function map(arr,func) {
  return arr.map(func);
}


<<<<<<< HEAD
// function reduce(arr,starting) {
//   return arr.reduce((memo,i) => {
//     if(starting === undefined) {
//       memo *= i;
//       return memo !==0;
//     }
//     else {
//       return memo += i;
//     }
//   },starting);
// }

function reduce(arr,func) {
  return arr.reduce(func);
}

=======
function reduce(arr,func,starting) {
  return arr.reduce(func,starting);
}


>>>>>>> 9aed1101c83c864d6ee3f5732903c80568b5ff54
console.log(map([1, 2, 3, -9], function(a){ return a * a }))
// console.log(reduce([1,2,3],(memo,i) => {
//   memo *= i;
//   return memo!==0;
// },1))
