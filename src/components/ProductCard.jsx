import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const id = product.title;

  const idString = (id) => {
    return String(id).toLocaleLowerCase().split(" ").join("");
  };

  const rootId = idString(id);
  console.log(rootId);

  const handleDetails = (e) => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group relative">
      <div
        onClick={(e) => handleDetails(e)}
        className="w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="product-img"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between item-center">
          <div>
            <h2 className="text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex gap-2 relative overflow-hidden w-24 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500 ">
              <p className="line-through text-gray-500">${product.oldPrice}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
            <p className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500">
              add to cart{" "}
              <span>
                <FaArrowRight />{" "}
              </span>
            </p>
          </div>
        </div>
        <div>
          <p>{product.category}</p>
        </div>
        <div className="absolute top-0 left-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1 ">sale</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
