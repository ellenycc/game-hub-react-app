import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]; // generic type parameter
}

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e96314c458274affa4f7566425f662df",
  },
});
