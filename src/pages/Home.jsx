import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductShowcase from '../components/layouts/ProductShowcase'
import axios from 'axios'
import Categorys from '../components/layouts/Categorys'

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
      <Categorys/>
    </div>
  )
}

export default Home