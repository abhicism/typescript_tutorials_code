// ts-product-manger
// “a product with its price details”


type Product = {
    name: string;
   ID : number;
}

type Price = {
    price: number;
    currency: string;
}

type ProductWithPrice = Product & Price;

const laptop : ProductWithPrice = {
    name: "Laptop",
    ID : 1,
    price: 999.99,
    currency: "USD",
}

console.log(laptop); //print laptop with the property