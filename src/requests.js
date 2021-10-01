export const baseUrl = "http://192.168.225.40:8089";

const requests = {
  login: `/login`,
  signup: `/register`,
  logout: `/logout`,
  updateProfile: `/updateProfile`,
  verifyEmail: `/verifyEmail`,
  userList: `/userList`,
  allProduct: "/product/allProduct",
  productByCategory: "/product/productByCategory",
  home: "/home/data",
  allCategory: "/category/all",
  cities: "/city/get",
  addCity: "/city/create",
  addCategory: "/category/create",
  updateProduct: "/",
};

export default requests;
