import { aF as defHttp } from "./index.bb57ad5a.js";
const shopListApi = () => defHttp.get({
  url: "/getShops"
});
const addShopApi = (params) => defHttp.post({
  url: "/addShop",
  params
});
const updateShopApi = (params) => defHttp.post({
  url: "/updateShop",
  params
});
const deleteShopApi = (params) => defHttp.post({
  url: "/delShop",
  params
});
const searchShop = (params) => defHttp.get({
  url: "/searchShop",
  params
}, { errorMessageMode: "none" });
export { searchShop as a, addShopApi as b, deleteShopApi as d, shopListApi as s, updateShopApi as u };
