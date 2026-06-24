import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ProductShowcase from '../components/layouts/ProductShowcase'
import axios from 'axios'
import Categorys from '../components/layouts/Categorys'
import Feature from '../components/layouts/Feature'
import Footer from '../components/Footer'

const Home = () => {
  let [allData, setAllData] = useState([]);
  let [allDataTwo, setAllDataTwo] = useState([]);
  let [allDataThree, setAllDataThree] = useState([]);
    useEffect( () =>{
      async function allpro (){
        let proData = await axios.get('https://dummyjson.com/products')
       setAllData(proData.data.products.slice(0, 4));  
      }
     allpro()
    },[])
    useEffect( () =>{
      async function allpro (){
        let proData = await axios.get('https://dummyjson.com/products')
       setAllDataTwo(proData.data.products.slice(0, 4));  
      }
     allpro()
    },[])
    useEffect( () =>{
      async function allpro (){
        let proData = await axios.get('https://dummyjson.com/products')
       setAllDataThree(proData.data.products.slice(0, 8));  
      }
     allpro()
    },[])
  return (
    <div>
      <ProductShowcase heading ={'Flash Sales'} title={'Today’s'} button={'View All Products'} allpro={allData}/>
      <Categorys/>
      <ProductShowcase heading ={'Best Selling Products'} title={'This Month'}  button={'View All'} allpro={allDataTwo}/>
      <ProductShowcase heading ={'Explore Our Products'} title={'Our Products'} button={'View All Products'} allpro={allData}/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default Home