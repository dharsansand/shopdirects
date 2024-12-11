import React from 'react';
// Import the StateContext provider
// Adjust the import path if necessary
import './globals.css'; // Your global CSS file

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional metadata here if needed */}
      </head>
      
      <body>
        {children}
      </body>
    </html>
  );
}
