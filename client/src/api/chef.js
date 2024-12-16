import { instance } from "./axios.js";

export const getAllChefs = async (setChefs) => {
  const response = await instance.get("/chefs?populate=*");
  setChefs(response.data.data);
};