// Start coding here !

function getProduct(name = "John", id = "001") {
  let code = `${name}-${id}`;
  return {
    id: 1030,
    name: "Samsung",
    price: 3000,
    photo: null,
    code: code,
  };
}

let product = getProduct();
console.log(product);

// Result should be
// {
// 	id: 1030
// 	name: "Samsung",
// 	price: 3000,
// 	photo: null,
//   code: "John-001"
// }
