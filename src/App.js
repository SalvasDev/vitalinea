import React, { Fragment } from 'react'
import Header from './components/Header';

import './App.scss';
import Nutri from './components/Nutri';
import Familia from './components/Familia';
import Footer from './components/Footer';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Nutri />
      <Familia />
      <Footer />
    </Fragment>
  )
}

export default App;


