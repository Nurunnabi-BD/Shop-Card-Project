import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

function Shop( { cart, setCart }) {
  const products = Array.from({ length: 9 }).map(() => ({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
    quantity: 1,
  }));
  const [product] = useState(products);
  return (
    <>
      <div className="grid justify-center items-center bg-base-200 *:p-2 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mt-6 ">
        {product.map((prod) => (
          <SingleProduct
            product={prod}
            cart={cart}
            setCart={setCart}
            key={product.id}
          />
        ))}
      </div>
    </>
  );
}
export default Shop;
