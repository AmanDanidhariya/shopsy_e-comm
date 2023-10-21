import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FilterPanel = () => {
  const [category , setCategory] = useState([]);

  useEffect(()=>{
  axios.get("https://real-time-amazon-data.p.rapidapi.com/product-reviews")
  .then(response=>response.data)
  .then(data=>setCategory(data));
  },[])
  console.log(category);
  
  return (
    <div className='w-1/3 bg-white-600'>fwr</div>
  )
}

export default FilterPanel