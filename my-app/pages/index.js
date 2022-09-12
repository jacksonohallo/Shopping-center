import React from 'react';
import Link from 'next/link';
import {Product, FooterBanner, HeroBanner} from '../Components'


const Home = () => {
  return (
    <>
      <HeroBanner/>
      
      
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variation</p>
      </div>


      <div className='product-container'>
        {['Product 1', 'Product 2'].map(
   (product)=>product)}
      </div>
<FooterBanner/>
    </>
  )
}

export default Home;
