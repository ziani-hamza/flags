import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountries = () => {
    const[data,setData]=useState([]);
    const[rangeValue,setRangeValue]=useState(36);
    const[selectedRadio,setSelectedRadio]=useState("");
    const radios =["Africa","America","Asia","Europe","Oceania"];
    useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all").then((res)=>setData(res.data));
    },[]);

   return [data,rangeValue,selectedRadio,radios,{
           setData,setRangeValue,setSelectedRadio
   }] 
        
    
};

export default useCountries;