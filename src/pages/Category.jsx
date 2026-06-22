import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from '../components/layouts/ProductShowcase'

const Category = () => {
    let [allData , setAllData] = useState([])
    useEffect(()=>{
      async function allData(){
       let alldata = await axios.get('https://dummyjson.com/products')
       setAllData(alldata.data.products)
      }
      allData()
    },[])

  return (
    <>
    <ProductShowcase allpro={allData}/>
    </>
  )
}

export default Category