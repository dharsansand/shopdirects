import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';  // Make sure to import urlFor correctly

const Product = ({ product: { image, name, slug, price } }) => {
  
  const imageUrl = image && image[0] ? urlFor(image[0]).url() : ''; // Add .url() to get the string URL

  console.log('Image URL:', imageUrl);  // This will log the URL to check if it's valid

  return (
    <Link href={`/product/${slug.current}`}>
    <div  className="product-card">
      {imageUrl ? (
        <img src={imageUrl} width={250} height={250} className="product-image" />
      ) : (
        <div>No Image Available</div>  // Show a fallback if no image URL is available
      )}
      <h3 className="product-name">{name}</h3>
      <p  className="product-price">${price}</p>
      </div>
      </Link>
   
  );
};

export default Product;
