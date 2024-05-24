export interface Product {
  id: number;
  name: string;
  price: number;
}

// This function expects to return an array of Product objects
async function getProducts(): Promise<Product[]> {
  const response = await fetch('https://api.example.com/products');
  const data = await response.json();

  return data; // This might return an object with a different structure
}

// This line will cause a type error
getProducts().then((products) => {
  products.forEach((product) => {
    console.log(`Product name: ${product.name}, price: ${product.price}`);
  });
});
