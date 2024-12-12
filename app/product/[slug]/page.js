import React from 'react';
import { client } from '@/lib/client';

import ProductDetailsClient from '@/components/ProductDetailsClient'; // Import the client-side component
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  return products.map((product) => ({
    slug: product.slug.current,
  }));
}

export default async function ProductDetails({ params }) {
  const { slug } = await params;
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;

  // Fetch the product data
  const product = await client.fetch(query);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Navbar />
      <ProductDetailsClient product={product} /> 
      <Footer />
    </div>
  );
}
