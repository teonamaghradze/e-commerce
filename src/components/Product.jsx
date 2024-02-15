import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/productsSlice";

function Product() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const location = useLocation();
  let [baseQuantity, setBaseQuantity] = useState(1);

  useEffect(() => {
    setDetails(location.state.item);
  }, [location]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />);
      }
    }
    return stars;
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 relative">
        <div className="w-2/5 relative">
          <img
            src={details.image}
            alt="product"
            className="w-full h-[550px] object-cover"
          />
        </div>

        <div className="absolute top-0 left-0">
          {details.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1 ">sale</p>
          )}
        </div>

        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>

            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">${details.oldPrice}</p>
              <p className="font-semibold">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-bold">
            <div className="flex">{renderStars(details.rating)}</div>
            <p className="text-xs text-gray-500">(1 costumer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQuantity(
                      baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() => setBaseQuantity(baseQuantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                )
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
