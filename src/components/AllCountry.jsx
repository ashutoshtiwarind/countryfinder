import React, {useEffect, useState} from "react"
import CountryApi from "../services/CountryApi";
import MediaCard from "./MediaCard";
import '../styles/AllCountry.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function AllCountry() {
  const [allCountry, setCountry] = useState([]);
  
  const handleChange = () => {
    const sortedData = allCountry.sort((a,b) => {
      return a.population - b.population;
    });
    setCountry(sortedData);
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
      color="primary"
      // value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">sort by population</ToggleButton>
      <ToggleButton value="android">sort by region</ToggleButton>
    </ToggleButtonGroup>

    <div style={{display:'grid', gridTemplateColumns: 'auto auto auto auto', padding: '2%'}}>
    <MediaCard countryData = {allCountry} />
    </div>
    </>
  )
}