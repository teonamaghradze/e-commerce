import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/productsSlice";
import { ToastContainer, toast } from "react-toastify";

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
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        <div className="relative">
          <img
            src={details.image}
            alt="product"
            className="w-full h-auto lg:h-[550px] object-cover"
          />
          {details.isNew && (
            <p className="absolute top-0 left-0 bg-black text-white font-semibold px-6 py-1">
              Sale
            </p>
          )}
        </div>

        <div className="flex flex-col justify-center gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              {details.title}
            </h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through text-gray-500">${details.oldPrice}</p>
              <p className="font-semibold">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-bold">
            <div className="flex">{renderStars(details.rating)}</div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500">{details.description}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 text-sm font-semibold">
              <button
                onClick={() =>
                  setBaseQuantity(baseQuantity === 1 ? 1 : baseQuantity - 1)
                }
                className="border h-8 w-8 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                -
              </button>
              <span>{baseQuantity}</span>
              <button
                onClick={() => setBaseQuantity(baseQuantity + 1)}
                className="border h-8 w-8 flex items-center justify-center hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQuantity,
                    description: details.description,
                  })
                );
                toast.success(`${details.title} is added`);
              }}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Product;
