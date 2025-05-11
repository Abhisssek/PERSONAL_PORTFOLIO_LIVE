import React from 'react'
import { FaEye } from 'react-icons/fa'
import './Portfolio.css'

export const Portfolio = () => {

  const portfolioItems = [
    {
      id: 1,
      title: "Weather App",
      category: "MERN stack",
      image: "../img/weather1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Ecommerce website",
      category: "MERN stack, Material UI",
      image: "../img/ecomm1.png", // Replace with actual image URL
    },
    
  ];
  

  return (
    <div className='portfolio main-article' >
      
      <h1>Portfolio</h1>
      <hr className='small-horizontal' />
      
      <div className="portfolio-container">
      {portfolioItems.map((item) => (
        <div key={item.id} className="portfolio-card">
          <div className="portfolio-image-container">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="overlay">
              <FaEye className="eye-icon" />
            </div>
          </div>
          <h3 className="portfolio-title">{item.title}</h3>
          <p className="portfolio-category">{item.category}</p>
        </div>
      ))}
    </div>
    </div>
  )
}
