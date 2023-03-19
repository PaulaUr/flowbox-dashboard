//export const BASE_URL = "https://fakestoreapi.com";
export const BASE_URL = "https://api.escuelajs.co/api/v1";

export const getProducts = async () => {
  return await fetch(BASE_URL + "/products?offset=0&limit=20", {
    method: "GET",
  });
};
