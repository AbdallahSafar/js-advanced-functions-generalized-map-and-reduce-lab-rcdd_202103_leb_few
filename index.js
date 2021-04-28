// Add your functions here
function map(arr,func) {
  return arr.map(func);
}

function reduce(arr,func,starting) {
  return arr.reduce(func,starting);
}

console.log(map([1, 2, 3, -9], function(a){ return a * a }))
// console.log(reduce([1,2,3],(memo,i) => {
//   memo *= i;
//   return memo!==0;
// },1))
