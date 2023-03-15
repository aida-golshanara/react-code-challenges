import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DogPics() {
  const [dogImage, setDogImage] = useState('');

  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    } catch (error) {
      console.error(error);
    }
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
        <div className='row justify-content-center align-items-center'>
          <div className='col-lg-6'>
            <h1 className='text-center mb-4'>Random Dog Pictures</h1>
            <button
              className='btn btn-primary btn-block '
              onClick={handleButtonClick}
            >
              Get Dog Picture
            </button>
            {dogImage && (
              <div className='mt-4'>
                <img src={dogImage} alt='Random Dog' className='img-fluid' />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DogPics;
