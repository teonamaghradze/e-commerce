import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
    // "https://api.escuelajs.co/api/v1/products"
    // "https://fake-store-api.mock.beeceptor.com/api/products"
  );

  return products;
}
