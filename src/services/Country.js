import axios from "axios";

const getCountry = () => axios.get(`https://restcountries.com/v3.1/all`);

// eslint-disable-next-line
export default {
  getCountry,
}