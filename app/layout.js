import React from 'react';
// Import the StateContext provider
// Adjust the import path if necessary
import './globals.css';
import { StateContext } from '@/context/StateContext';
// Your global CSS file

export const metadata = {
  title: 'DirectShop',
  description: '"Shop the latest laptops with unbeatable performance and cutting-edge technology. Get fast delivery and top-notch customer service for all your computing needs.""Shop the latest laptops with unbeatable performance and cutting-edge technology. Get fast delivery and top-notch customer service for all your computing needs.""Shop the latest laptops with unbeatable performance and cutting-edge technolo"Shop the latest laptops with unbeatable performance and cutting-edge technology. Get fast delivery and top-notch customer service for all your computing needs."gy. Get fast delivery and top-notch customer service for all your computing needs."',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional metadata here if needed */}
      </head>
      
      <body>
        <StateContext>
        {children}
        </StateContext>
      </body>
    </html>
  );
}
