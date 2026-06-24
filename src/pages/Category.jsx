import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductShowcase from '../components/layouts/ProductShowcase'

const Category = () => {
  const [allData, setAllData] = useState([]);
  const [allDataTwo, setAllDataTwo] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get('https://dummyjson.com/products');
      setAllData(res.data.products);
    }

    getProducts();
  }, []);

  useEffect(() => {
    async function getElectronics() {
      const res = await axios.get(
        'https://fakestoreapi.com/products/category/electronics'
      );

      setAllDataTwo(res.data); // <-- এখানে products হবে না
    }

    getElectronics();
  }, []);

  return (
    <>
      <ProductShowcase
        heading="Flash Sales"
        title="Today’s"
        button="View All Products"
        allpro={allData}
      />

      <ProductShowcase
        heading="Best Selling Products"
        title="This Month"
        button="View All"
        allpro={allDataTwo}
      />
    </>
  )
}

export default Category