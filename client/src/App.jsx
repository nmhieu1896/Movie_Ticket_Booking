import React from 'react';

import Carousel from './components/Carousel/Carousel.component';
import Header from './components/Header/Header.component';

import './SCSS/main.scss';

const App = () => (
  <div className="App">    
    <Header />
    <Carousel />
  </div>
);

export default App;
