import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ColorRenderer from './color-renderer/ColorRenderer';
import DarkMode from './dark-mode/DarkMode';
import FormValidator from './form-validator/FormValidator';
import DogPics from './dog-pictures/DogPics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/color-renderer' element={<ColorRenderer />} />
        <Route path='/dark-mode' element={<DarkMode />} />
        <Route path='/form-validator' element={<FormValidator />} />
        <Route path='/dog-pictures' element={<DogPics />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
