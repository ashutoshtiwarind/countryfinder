import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryApi from '../services/CountryApi.js'

export default function Country ({countryname}) {
  const [country, setCountryData] = useState([])
  console.log('hihih', countryname)
  console.log('mil', country)

  const fetchCountryData = async (countryname) => {
    const res = await CountryApi.getOneCountryData(countryname);
    console.log(res.data)
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