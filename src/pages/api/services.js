import axios from "axios";

const api = axios.create({
  baseURL: "https://bobsburgers-api.herokuapp.com/characters/",
});




export default api;
