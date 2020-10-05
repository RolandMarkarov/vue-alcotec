import axios from "axios";

export const uri = 'https://dev.alcotec.com.ua/api/products/';

export async function  fetchData(id, method) {
  try {
    let res = await axios({method, url: uri + id}).then(res=> res.data);
    return res
  } catch (e) {
    return e
  }
}
