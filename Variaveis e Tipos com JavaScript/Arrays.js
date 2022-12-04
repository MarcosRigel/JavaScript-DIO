let array = []
// undefined
array.push(3)
// 1
array
// [3]
array.push(2)
// 2
array
// (2) [3, 2]
array.pop()
// 2
array
// [3]
array.push(2)
// 2
array.push(5)
// 3
array.shift()
// 3
array
// (2) [2, 5]
array.unshift(1)
// 3
array
// (3) [1, 2, 5]
for(let i = 0; i< array.length; i++) {
  console.log(array[i]);
}
// 1
// 2
// 5
// undefined
array.includes(3)
// false
array.every(item => item === 5)
// false
array.some(item => item === 5)
//  true
array.reverse()
// (3) [5, 2, 1]
// 0: 5
// 1: 2
// 2: 1
// length: 3
// __proto__: Array(0)
