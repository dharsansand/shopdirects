import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 direct shop All rights reserverd</p>
      <p className="icons">
      <FaGithub />
        <AiFillInstagram />
       
      </p>
    </div>
  )
}

export default Footer