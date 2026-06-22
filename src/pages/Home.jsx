import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductShowcase from '../components/layouts/ProductShowcase'
import axios from 'axios'

const Home = () => {
  let [allData, setAllData] = useState([]);
    useEffect( () =>{
      async function allpro (){
        let proData = await axios.get('https://dummyjson.com/products')
       setAllData(proData.data.products.slice(0, 4));  
      }
     allpro()
    },[])
  return (
    <div>
      <ProductShowcase allpro={allData}/>
    </div>
  )
}

export default Home