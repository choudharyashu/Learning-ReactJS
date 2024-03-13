import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const [productList, setProductList] = useState([
    {
      price: 99999,
      name: "IPhone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi",
      quantity: 0,
    },
  ]);
  let [totalAmount, setTotalAmount] = useState(0);

  function quantityIncrease(index) {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    newProductList[index].quantity++;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  function quantityDecrease(index) {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }
  
  function resetData(){
    let newProductList = [...productList];
    let newTotalAmount = 0;
    newProductList.map((products)=>{
      products.quantity=0;
    })
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    
  }
  
  function removeItem(index){
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount-=newProductList[index].quantity*newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    

  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          quantityIncrease={quantityIncrease}
          quantityDecrease={quantityDecrease}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetData={resetData}/>
    </>
  );
}

export default App;
