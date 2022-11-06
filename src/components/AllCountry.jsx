import React, {useEffect, useState} from "react"
import CountryApi from "../services/CountryApi";
import MediaCard from "./MediaCard";
import '../styles/AllCountry.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AllCountry() {
  const [allCountry, setCountry] = useState([]);
  const [sort, setSort] = useState('Increasing');
  const handleChange = async() => {
    const res = await CountryApi.getCountry()
    const sortedData = res.data.sort((a,b) => {
      return a.population - b.population;
    });
    setCountry(sortedData);
    setSort('Decreasing');
  }

  const handleDescSort = async() => {
      const res = await CountryApi.getCountry()
      const sortedData = res.data.sort((a,b) => {
        return b.population - a.population;
      });
      setCountry(sortedData);
      setSort('Increasing')
  }
  const fetchCountry = async()=> {
    const res = await CountryApi.getCountry()
    setCountry(res.data);
  };

  useEffect(()=> {
    fetchCountry();
  },[])

  return (
    <>
     <ToggleButtonGroup
     className="btn"
      color="primary"
      // value={alignment}
      exclusive
      onChange={sort === 'Increasing'? handleChange : handleDescSort}
      aria-label="Platform"
    >
      <ToggleButton value="web">sort by population in {sort} order</ToggleButton>
      <ToggleButton value="android">sort by region</ToggleButton>
    </ToggleButtonGroup>

    <div className ='main'>
    <MediaCard countryData = {allCountry} />
    </div>
    </>
  )
}