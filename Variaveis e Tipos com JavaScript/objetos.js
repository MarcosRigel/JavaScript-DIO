let obj = {}
// undefined
typeof obj
// "object"
obj.name = "julia"
// "julia"
obj
// {name: "julia"}
//  name: "julia"
// __proto__: Object
obj.age = 20
// 20
obj
// {name: "julia", age: 20}
// age: 20
// name: "julia"
// __proto__ : Object
Object.values(obj)
// (2) ["julia", 20]
Object.keys(obj)
// (2) ["name", "age"]
let person = {
  name: "Julia",
  age: 20,
  adress: "Rua 2"
}
// undefined
person
// {name: "Julia", age: 20, adress: "Rua 2"}
// adress: "Rua 2"
// age: 20
// name: "Julia"
// __proto__: Object
person.name
// "Julia"
person["name"]
// Julia
person["numberOfSiblings"] = 3
// 3
person
// {name: "Julia", age: 20, adress: "Rua 2", numberOfSiblings: 3}
// adress: "Rua 2"
// age: 20
// name: "Julia"
// numberOfSiblings: 3
// __proto__: Object
let mon = "nameOfMom"
// undefined
person.mom = "adokaw"
// undefined
person[mom] = "Maria"
// {name: "Julia", age: 20, adress: "Rua 2", numberOfSiblings: 3, nameOfMom: "maria"}
// adress: "Rua 2"
// age: 20
// name: "Julia"
// numberOfSiblings: 3
// __proto__: Object
person.mom = "marta"
// "marta"
person