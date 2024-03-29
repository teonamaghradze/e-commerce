import { Link } from "react-router-dom";
import { logo, cart } from "../assets/index";
import { useSelector } from "react-redux";

function Header() {
  const productData = useSelector((state) => state.ecommerce.productData);
  const userInfo = useSelector((state) => state.ecommerce.userInfo);
  console.log(userInfo);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-[4.5rem]" src={logo} alt="logo" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <Link to="/blog">
              <li className="text-black font-bold hover:text-purple-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6" src={cart} alt="cart-logo" />
              <span className="absolute   bottom-[8px] left-2.5 flex items-center justify-center font-semibold text-red-100 text-xs">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              src={
                userInfo
                  ? userInfo?.image
                  : "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              }
              alt="user-logo"
              className="w-8 h-8 rounded-full"
            />
          </Link>

          {userInfo && (
            <p className="font-semibold text-red-800">{userInfo.name}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
