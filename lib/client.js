// lib/sanity.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
  projectId: '56vllltl', // Replace with your Sanity project ID
  dataset: 'production',        // Use the correct dataset
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
      

});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);