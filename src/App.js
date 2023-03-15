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
                <p className='card-text'>using useSate and map</p>
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
                  there are two button that shows the user the dark mode and
                  light mode
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
                <h5 className='card-title'>Form Validator</h5>
                <p className='card-text'>
                  simple form withh a username, password and password
                  confirmation, that shows an error in case of lack of one of
                  the inputs or not matching the password and password
                  confirmation
                </p>
                <NavLink className='btn btn-primary' to='/form-validator'>
                  Go to the Project
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Dog Pictures</h5>
                <p className='card-text'>
                  by clicking the button you can see a random picture of dogs
                  each time
                </p>
                <NavLink className='btn btn-primary' to='/dog-pictures'>
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
                <h5 className='card-title'>Score Keeper</h5>
                <p className='card-text'>
                  by clicking the button you can see the score and also by
                  refreshing the page you can still see the score and you do not
                  loose it
                </p>
                <NavLink className='btn btn-primary' to='/score-keeper'>
                  Go to the Project
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Window event</h5>
                <p className='card-text'>
                  when the toggle window event is active, add an event listener
                  to the window that triggers an alert if the user double clicks
                  on the page
                </p>
                <NavLink className='btn btn-primary' to='/window-event'>
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
                <h5 className='card-title'>Color picker</h5>
                <p className='card-text'>
                  there are six buttons for one color and by clicking each
                  button it changes the color of background
                </p>
                <NavLink className='btn btn-primary' to='/color-picker'>
                  Go to the Project
                </NavLink>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Window event</h5>
                <p className='card-text'>
                  when the toggle window event is active, add an event listener
                  to the window that triggers an alert if the user double clicks
                  on the page
                </p>
                <NavLink className='btn btn-primary' to='/window-event'>
                  Go to the Project
                </NavLink>
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
