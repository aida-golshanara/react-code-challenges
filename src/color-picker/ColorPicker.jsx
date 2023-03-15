import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = [
    { name: 'Red', code: '#ff0000' },
    { name: 'Green', code: '#00ff00' },
    { name: 'Blue', code: '#0000ff' },
    { name: 'Orange', code: '#ff8800' },
    { name: 'Gray', code: '#666666' },
    { name: 'Black', code: '#000000' },
  ];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary fw-bold'>
        <div className='container'>
          <a className='navbar-brand me-5' href='/'>
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
                rel='noreferrer'
                className='nav-link me-2'
                href='https://www.linkedin.com/in/aida-golshanara/'
              >
                My Linkedin
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='nav-link me-2'
                href='https://github.com/aida-golshanara?tab=repositories'
              >
                My Portfolio
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                className='nav-link'
                href='https://kmagroute.com/'
              >
                For Cooperation
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <h1 className='text-center mb-4'>Color Picker</h1>
            <div
              className='p-4 rounded mb-4'
              style={{ backgroundColor: backgroundColor }}
            >
              <p className='text-center mb-0'>
                The background color is {backgroundColor}.
              </p>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              {colors.map((color) => (
                <button
                  key={color.name}
                  className='btn me-3'
                  style={{ backgroundColor: color.code }}
                  onClick={() => handleColorChange(color.code)}
                >
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
