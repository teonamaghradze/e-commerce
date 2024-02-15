import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 p-20">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Shopping e-commerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            mauris odio, vehicula eu odio sed, aliquet consequat felis.
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="flex">
            <li className="mr-4">
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebook />
              </a>
            </li>

            <li className="mr-4">
              <a
                href="http://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </li>

            <li className="mr-4">
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
            </li>

            <li className="mr-4">
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-400"
              >
                <FaXTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 rounded-full py-2 px-4 w-full mb-2 focus:outline-none focus:bg-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 rounded-full py-2 px-6 text-sm focus:outline-none focus:bg-gray-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
        <div>© 2024 E-Commerce Store</div>
        <nav>
          <a href="#" className="mx-2 hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            Refund Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
