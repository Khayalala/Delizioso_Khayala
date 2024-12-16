import { instance } from "./axios.js";

export const getAllCategories = async (setCategories) => {
  const response = await instance.get("/categories?populate=*");
  setCategories(response.data.data);
};
