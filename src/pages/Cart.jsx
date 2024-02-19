import { ToastContainer, toast } from "react-toastify";
import { coverWomen } from "../assets";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";

function Cart() {
  const productData = useSelector((state) => state.ecommerce.productData);
  const [totalAmount, setTotalAmount] = useState("");
  const [pay, setPay] = useState(false);

  const userInfo = useSelector((state) => state.ecommerce.userInfo);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });

    setTotalAmount(price);
  }, [productData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPay(true);
    } else {
      toast.error("Please Sign in to checkout");
    }
  };

  return (
    <div>
      <img className="w-full h-60 object-cover" src={coverWomen} alt="" />

      <div className="max-w-screen-xl mx-auto py-20 px-4 lg:px-0 flex flex-col lg:flex-row">
        {productData.length > 0 ? (
          <>
            <CartItem />
            <div className="w-full lg:w-1/3 bg-[#fafafa] py-6 px-4 lg:px-8">
              <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className="text-2xl font-medium">Total</h2>
                <p className="text-base font-bold">
                  $ {Number(totalAmount).toFixed(2)}
                </p>

                <p className="text-base">
                  Shipping address: Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                </p>

                <p className="text-xl font-semibold flex justify-between">
                  Total amount: <span>$ {Number(totalAmount).toFixed(2)}</span>
                </p>

                <button
                  onClick={handleCheckout}
                  className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
                >
                  Checkout
                </button>

                {pay && (
                  <div className="w-full flex items-center justify-center">
                    <StripeCheckout
                      stripeKey="pk_test_51OlWaEIIni8rijeS797TFZkiChV98cNGLwTi6dbKwlyDCJQgJDONKQRSMTSjk9TjkkIMHfiwFk1pj3Rgetmqovc500qWr0qWBW"
                      name="Ecommerce website"
                      amount={totalAmount * 100}
                      label="Pay to Shop"
                      description={`Your Payment amount is $${totalAmount}`}
                      email={userInfo.email}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center text-red-400 font-bold">
              <p>You haven't added any items to the cart yet.</p>
              <Link to="/" className="mt-8">
                <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-200">
                  <FaArrowLeft />
                  <span>Continue Shopping</span>
                </button>
              </Link>
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
