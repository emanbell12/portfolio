import React from 'react';
import prgfem from "../assets/prgfem.gif";
import nameback from "../assets/nameback.svg";
const hero = () => {
  return (
   
<section id="me" className="d-flex justify-content-center align-items-center mt-5" style={{ backgroundColor: "#F7F7F7", width: '100vw', minHeight: '90vh', overflowX: 'hidden' }}>
  <div className="container">
    <div className="row d-flex flex-column flex-lg-row align-items-center">
      <div className="text-center text-lg-start col-lg-6 mb-4 mb-lg-0">
        <p className='text-warning fw-semibold fs-4'>Software Engineer</p>
        <div
          className="d-flex align-items-center text-center text-lg-left"
          style={{
            backgroundImage: `url(${nameback})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left',
            height: '90px',
            width: '100%',
          }}
        >
          <h1 className="mx-auto mx-lg-0">Eman Bellahwal</h1>
        </div>
        <p>Top Software Engineering graduate with a 99% academic score and multiple competition wins. Proficient in diverse technologies, recognized for dedication and high-quality solutions.</p>
          
          <div>
          <a className='btn btn-warning me-4 px-3'>Projects</a>
          <a className='btn btn-outline-dark px-3'>Contact</a>
          </div>
      </div>
      <div className="col-lg-6 d-flex justify-content-center">
        <img src={prgfem} alt="Me" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  </div>
</section>


  )
}

export default hero
