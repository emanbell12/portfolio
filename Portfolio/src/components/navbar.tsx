
const navbar = () => {
  return (
    <nav  className="navbar navbar-expand-lg fixed-top navbar-scroll">
      <div className="container-fluid">
        <a className="navbar-brand" href="#!">EmanBell</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#me">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exp">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#edu">Education</a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="#proj">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-twitter">Linkedin</i>
              </a>
            </li>
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" href="#!">
                <i className="fab fa-instagram">Github</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
