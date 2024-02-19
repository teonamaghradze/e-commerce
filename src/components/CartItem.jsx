import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  deleteProduct,
  increment,
  resetCart,
} from "../redux/productsSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

function CartItem() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.ecommerce.productData);
  return (
    <div className="lg:w-2/3 pr-10 md:w-[100%]">
      <div className="w-full">
        <h2 className="text-2xl">Shopping cart</h2>
      </div>

      <div>
        {productData.map((item) => (
          <div
            className="flex items-center justify-between gap-6 mt-6"
            key={item.id}
          >
            <div className="flex items-center gap-2">
              <IoMdClose
                onClick={() => dispatch(deleteProduct(item.id))}
                className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
              />
              <img
                src={item.image}
                alt="product"
                className="w-32 h-32 object-cover"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            <p className="w-10">${item.price}</p>

            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <span
                  onClick={() =>
                    dispatch(
                      decrement({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  onClick={() =>
                    dispatch(
                      increment({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                >
                  +
                </span>
              </div>
            </div>
            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        ))}
      </div>

      <button
        className="bg-red-500 text-white mt-8 ml-7 px-6 hover:bg-red-800 duration-300 py-2"
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty")
        }
      >
        Reset Cart
      </button>

      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-200">
          <span>
            <FaArrowLeft />
          </span>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;
