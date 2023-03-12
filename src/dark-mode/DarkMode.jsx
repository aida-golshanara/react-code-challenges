import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(true);
  };

  const handleLightMode = () => {
    setDarkMode(false);
  };

  return (
    <>
    <nav className='navbar navbar-expand-lg bg-body-tertiary fw-bold'>
        <div className='container'>
          <a className='navbar-brand me-5' href='#'>
            Welcome to React.js Code Challenges
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
              <a
                target='_blank'
                className='nav-link me-2'
                href='https://www.linkedin.com/in/aida-golshanara/'
              >
                My Linkedin
              </a>
              <a
                target='_blank'
                className='nav-link me-2'
                href='https://github.com/aida-golshanara?tab=repositories'
              >
                My Portfolio
              </a>
              <a
                target='_blank'
                className='nav-link'
                href='https://kmagroute.com/'
              >
                For Cooperation
              </a>
            </div>
          </div>
        </div>
      </nav>
    <div
      className={`container-fluid ${
        darkMode ? 'bg-dark text-white' : 'bg-light text-dark'
      }`}
    >
      <div
        className='row justify-content-center align-items-center'
        style={{ height: '100vh' }}
      >
        <div className='col-12 text-center'>
          <button className='btn btn-primary mr-2' onClick={handleDarkMode}>
            Dark Mode
          </button>
          <button className='btn btn-secondary' onClick={handleLightMode}>
            Light Mode
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default DarkMode;
