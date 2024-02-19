import { ToastContainer } from "react-toastify";
import { coverWomen } from "../assets";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Cart() {
  const productData = useSelector((state) => state.ecommerce.productData);
  const [totalAmount, setTotalAmount] = useState("");
  console.log(productData);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotalAmount(price);
  }, [productData]);

  return (
    <div>
      <img className="w-full h-60 object-cover" src={coverWomen} alt="" />

      <div className="max-w-screen-xl mx-auto py-20 flex">
        {productData.length > 0 ? (
          <>
            <CartItem />
            <div className="w-1/3 bg-[#fafafa] py-6 px-4">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">total</h2>
                <p className="flex items-center gap-4 text-base">
                  <span className="font-bold text-lg">
                    $ {Number(totalAmount).toFixed(2)}
                  </span>
                </p>

                <p className="flex items-start gap-4 text-base">
                  Shipping address
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </p>

                <p className="font-semibold flex justify-between mt-6">
                  Total amount{" "}
                  <span className="text-xl font-bold">
                    {" "}
                    $ {Number(totalAmount).toFixed(2)}
                  </span>
                </p>

                <button className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">
                  checkout
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-screen">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center text-red-400 font-bold">
                <p>You haven't added any items to the cart yet.</p>
              </div>
              <div className="flex items-center justify-center mt-8">
                <Link to="/">
                  <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-200">
                    <span>
                      <FaArrowLeft />
                    </span>
                    <span>Continue Shopping</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
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

export default Cart;
