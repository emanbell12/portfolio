import React from "react";
import { Experience } from "../constants";
const exp = () => {
  return (
<section id="exp" className="d-flex justify-content-center align-items-center" style={{backgroundColor: "#F7F7F7", width: '100vw',  overflowX: 'hidden' }}>
  <div className="mt-5 container" id="ads">
    <div className="d-flex flex-column align-items-center">
      <h2>Experience</h2>
      <div className="h-line"></div>
    </div>
    <div className="row">
    {Experience.map((exp) => (
      <div className="col-lg-4 mb-4 " key={exp.title}>
        <div className="card card-margin border-1">
          <div className="card-header d-flex align-items-center">
            <img
              className="logo-img "
              src={exp.logo}
              alt={exp.company}
            />
            <div className=" header-text">
              <h6>{exp.title}</h6>
              <p className="mb-0">{exp.company}</p>
            </div>
          </div>
          <div className="card-body pt-0">
            <div>
              <div className="mt-2 experience-card-duration">
                <span>{exp.start} -</span>
                <span>{exp.end}</span>
                {exp.duration && (
                  <span> ({exp.duration})</span>
                )}
              </div>
              <ol className="mt-4 experience-card-points">
                {exp.points.map((p) => (
                  <li className="mt-2 widget-49-meeting-item" key={p}>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  </div>
</section>



  )
}

export default exp
