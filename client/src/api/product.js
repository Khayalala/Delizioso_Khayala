import { instance } from "./axios.js"; // Adjust the path if necessary

export const getAllProducts = async (setProducts) => {
  const response = await instance.get("/products?populate=*");
  setProducts(response.data.data);
};