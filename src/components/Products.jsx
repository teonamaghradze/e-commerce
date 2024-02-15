import React from "react";
import ProductCard from "./ProductCard";

function Products({ products }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          UP TO 70% OFF SALE
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Don't miss out on our biggest sale of the year! Enjoy up to 70% off on
          a wide range of products, including fashion, electronics, home
          essentials, and more. From trendy clothing to must-have gadgets,
          there's something for everyone. Hurry, while stocks last!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
