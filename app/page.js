
import HeroBanner from '@/components/HeroBanner';
import React from 'react';
import { client } from '@/lib/client';
import Footerbanner from '@/components/Footerbanner';




const Home = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  props: { products, bannerData }
 

  return (
    <div>
   <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
    {console.log(bannerData)}
     <div className="products-heading">  <h2>Best Seller Products</h2>
     <p>speaker There are many variations passages</p>
     
     
     </div>
     <div className="products-container">
{products?.map((product) => product.name)}

 </div>


     <Footerbanner/>
 </div>








        
  );
}
export default Home
