import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScoreKeeper() {
  const [score, setScore] = useState(localStorage.getItem('score') || 0);

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleIncrease = () => {
    setScore(score + 1);
  };

  const handleDecrease = () => {
    if (score > 0) {
      setScore(score - 1);
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
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <h1 className='text-center mb-4'>Score Keeper</h1>
            <div className='d-flex justify-content-center align-items-center mb-4'>
              <button className='btn btn-primary mr-2' onClick={handleIncrease}>
                +
              </button>
              <h2>{score}</h2>
              <button className='btn btn-danger ml-2' onClick={handleDecrease}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScoreKeeper;
