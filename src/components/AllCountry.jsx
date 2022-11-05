import React, {useEffect, useState} from "react"
import Country from "../services/Country";

export default function AllCountry() {
  const [allCountry, setCountry] = useState([]);
  console.log(allCountry)
  
  const fetchCountry = async()=> {
    const res = await Country.getCountry()
    setCountry(res.data);
  };

  useEffect(()=> {
    fetchCountry();
  },[])

  return (
    <>
   {allCountry.map((e)=> {
    return <p>{e.name.common}</p>
   })}
    </>
  )
}