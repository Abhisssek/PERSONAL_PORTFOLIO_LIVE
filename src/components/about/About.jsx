import React from 'react'
import './About.css'

export const About = () => {


  const services = [{logo:<i class="fa-brands fa-android"></i>, title:'Android Development', description:'I have been developing Android apps for over 1 years now.'},{logo:<i class="fa-brands fa-weebly"></i>, title:'Web3 Development', description:'I have been developing WEB3 for over 6 Monthsnow.'},{logo:<i class="fa-solid fa-laptop-code"></i>, title:"MERN Development", description:'I have been developing MERN Web Apps for over 1 years now.'}]

  return (
    <div className='about main-article'>
        <h1>About Me</h1>
        <hr className='small-horizontal' />
        <p>I'm Frontend Developer from Odisha, India, working in web development but also some works are done in backend. I enjoy turning complex problems into simple, beautiful and intuitive designs.<br /><br />
My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>

        <div className="main-service">
          <h1>What I'm Doing</h1>
        <div className="services">

          
          {services.map((service, index) => (
              <div key={index} className="service">
                <div className="service-logo">{service.logo}</div>
                <div className="service-text">
                <h2>{service.title}</h2>
                <h4>{service.description}</h4>
                </div>
              </div>
          ))}
        </div>
        </div>
    </div>
  )
}
