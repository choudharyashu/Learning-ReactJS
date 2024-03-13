import React from "react";

export default function Product(props) {
  
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}{" "}
          <span className="badge text-bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button type="button" className="btn btn-outline-primary" onClick={()=>{props.quantityDecrease(props.index)}}>
            -
          </button>
          <button type="button" className="btn btn-outline-primary">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={()=>{props.quantityIncrease(props.index)}}>
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.price*props.product.quantity}
      </div>
      <button className="col-2 btn btn-danger" onClick={()=>{
        props.removeItem(props.index);
      }}>
        Remove
      </button>
    </div>
  );
}