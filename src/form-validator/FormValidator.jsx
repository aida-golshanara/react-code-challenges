import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormValidator() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit form data to server
      console.log(formData);
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
            <h1 className='text-center mb-4'>Form Validation</h1>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label>Email</label>
                <input
                  type='email'
                  className={`form-control ${formErrors.email && 'is-invalid'}`}
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>{formErrors.email}</div>
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input
                  type='password'
                  className={`form-control ${
                    formErrors.password && 'is-invalid'
                  }`}
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>{formErrors.password}</div>
              </div>
              <div className='form-group'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  className={`form-control ${
                    formErrors.confirmPassword && 'is-invalid'
                  }`}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div className='invalid-feedback'>
                  {formErrors.confirmPassword}
                </div>
              </div>
              <button type='submit' className='btn btn-primary btn-block mt-4'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormValidator;
