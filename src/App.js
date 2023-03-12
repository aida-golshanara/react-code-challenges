import { NavLink } from 'react-router-dom';
import './App.css';
import ColorRenderer from './color-renderer/ColorRenderer';

function App() {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary fw-bold'>
        <div className='container'>
          <NavLink className='navbar-brand me-5' to='/'>
            Welcome to React.js Code Challenges
          </NavLink>
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
      <section className='container my-5'>
        <div className='row mb-3'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Color Renderer</h5>
                <p className='card-text'>
                  this is simple color rendering in react.js by using useState
                </p>
                <NavLink className='btn btn-primary' to='/color-renderer'>
                  Go to the Project
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Dark Mode</h5>
                <p className='card-text'>
                  by clicking the button you can read a lot of funny jokes
                </p>
                <NavLink className='btn btn-primary' to='/dark-mode'>
                  Go to the Project
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>photo-gallery</h5>
                <p className='card-text'>
                  you can see as much as random pictures that you want
                </p>
                <a
                  target='_blank'
                  href='./photo-gallery/index.html'
                  className='btn btn-primary'
                >
                  Go to the Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>pic-generator</h5>
                <p className='card-text'>
                  by clicking the button you can see a random picture each time
                </p>
                <a target='_blank' href='' className='btn btn-primary'>
                  Go to the Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-sm-6 mb-3 mb-sm-0'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>quote-generator</h5>
                <p className='card-text'>
                  by clicking the button you can see a random quote each time
                </p>
                <a target='_blank' href='' className='btn btn-primary'>
                  Go to the Project
                </a>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>random-emoji</h5>
                <p className='card-text'>
                  by clicking the button you can see a random emoji each time
                </p>
                <a target='_blank' href='' className='btn btn-primary'>
                  Go to the Project
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>random-photos</h5>
                <p className='card-text'>
                  by clicking the button you can see a random photo each time
                </p>
                <a target='_blank' href='' className='btn btn-primary'>
                  Go to the Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
