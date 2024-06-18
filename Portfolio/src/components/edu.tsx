import React from 'react'
import uhblogo from "../assets/uhblogo.png"
const edu = () => {
  return (
    <section id="edu" className="container" style={{  width: '100vw', overflowX: 'hidden' }}>
        <div className='my-5'>
        <div className=" d-flex flex-column align-items-center justify-content-center">
      <h2>Education</h2>
      <div className="h-line"></div>
    </div>    
 

      <div className=" row justify-content-center align-items-center">        
        <div className="col-1 half-circle-right"> </div>
        <div className='col-6 text-center'>
          <img className='rounded-5 edu-img' src={uhblogo} />  
          <h3 className="">Bachelor's Degree in Software Engineering </h3>
          <p className="">Top of the 2024 class </p>
          <p>GPA 3.98 out of 4</p>
          <p>Known as the most dedicated, passionate, and hard-working graduate</p>
        </div> 
        <div className="col-1 half-circle-left"> </div>
    </div>
    </div>

    </section>
  )
}

export default edu
