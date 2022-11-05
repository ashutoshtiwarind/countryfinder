import axios from "axios";

const getCountry = () => axios.get(`https://restcountries.com/v3.1/all`);
const getOneCountryData = (name) => axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
// eslint-disable-next-line
export default {
  getCountry,
  getOneCountryData,
}