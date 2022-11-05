import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryApi from '../services/CountryApi.js'

export default function Country ({countryname}) {
  const [country, setCountryData] = useState([])
  console.log('mil', country)

  const fetchCountryData = async (countryname) => {
    const res = await CountryApi.getOneCountryData(countryname);
    setCountryData(res.data)
  };
    useEffect(()=>{
      if(countryname && countryname.length) {
        fetchCountryData(countryname);
      }
    },[countryname])
  return (
    <>
      <div>
      hello
    </div>
    </>
  )
}