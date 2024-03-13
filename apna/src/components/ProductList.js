import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length>0? props.productList.map((product, index) => {
    return (
      <Product
        product={product}
        key={index}
        quantityIncrease={props.quantityIncrease}
        quantityDecrease={props.quantityDecrease}
        index={index}
        removeItem={props.removeItem}
      />
    );
  }):<h1>No product exists in the cart.</h1>
}
