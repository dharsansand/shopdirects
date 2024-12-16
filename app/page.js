
import HeroBanner from '@/components/HeroBanner';
import React from 'react';
import { client } from '@/lib/client';
import Footerbanner from '@/components/Footerbanner';
import Product from '@/components/product';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Home = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  props: { products, bannerData }
 

  return (
    <div  className="layout">
    <Navbar />
  <div  className="main-container">
     <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
     {console.log(bannerData)}
      <div className="products-heading">
    <h2>Best Seller Products</h2>
    <p>Boost your productivity with the latest laptops offering powerful performance, sleek designs, and cutting-edge features.</p>
  </div>
     


  <div className="products-container">
{products?.map((product) => <Product key={product._id} product={product} />)}

 </div>

<Footerbanner footerBanner={bannerData && bannerData[0]}/>
 </div>
 
<Footer/>
</div>








        
  );
}
export default Home
