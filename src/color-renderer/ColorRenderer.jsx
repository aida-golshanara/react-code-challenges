import Color from './Color';

const colors = [
  {
    hex: '#008B8B',
    name: 'DarkCyan',
  },
  {
    hex: '#8FBC8F',
    name: 'DarkSeaGreen ',
  },
  {
    hex: '#FF7F50',
    name: 'Coral',
  },
  {
    hex: '#FFE4C4',
    name: 'Bisque',
  },
];

export default function ColorRenderer() {
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
      <div>
        {colors.map((color) => (
          <Color key={color.hex} hex={color.hex} name={color.name} />
        ))}
      </div>
    </>
  );
}
