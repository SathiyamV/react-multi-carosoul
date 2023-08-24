import React from "react";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./productdata";

const App = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      <h1>Multiple image carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default App;
