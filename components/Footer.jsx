import React from 'react';
import { AiFillInstagram} from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 direct shop All rights reserverd</p>
      <p className="icons">
      <a 
      href="https://github.com/dharsansand" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <FaGithub size={30} />
    </a>
    <a 
      href="https://www.instagram.com/dharsan._.27/profilecard/?igsh=MWlkdzJqYTMwMjM0cg==" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <AiFillInstagram size={30} />
    </a>
       
      </p>
    </div>
  )
}

export default Footer