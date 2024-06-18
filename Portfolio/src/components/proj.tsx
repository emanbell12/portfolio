import React from 'react'
import { projects } from '../constants'
const proj = () => {
  return (
    <section id="proj" className="container">
    <br/>
    <div className="d-flex flex-column align-items-center">
      <h2>Projects</h2>
      <div className="h-line"></div>
    </div>
    <div className="row" id="ads">
    {projects. map (proj =>
    <div className="col-md-4 mb-5">
        <div className="card rounded">
            <div className="card-image">
               
                <div className="image-container d-flex justify-content-center align-items-center">
                <img className="img-fluid" src={proj.pic} alt="Alternate Text" />
            </div>
            </div>
            <div className="card-image-overlay m-auto">
                {proj.tools.map (tool => <span className="card-detail-badge me-1">{tool}</span> )}
            </div>
            <div className="card-body text-center">
                <div className="ad-title m-auto">
                    <h5>{proj.title}</h5>
                    <p>{proj.role}</p>
                </div>
                <a className="ad-btn" target='_blank' href={proj.link}>View</a>
            </div>
        </div>
    </div>
)}
</div></section> 
  )
}

export default proj
