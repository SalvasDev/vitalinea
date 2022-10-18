import React, { Fragment } from 'react'
import Header from './components/Header';

import './App.scss';
import Nutri from './components/Nutri';
import Familia from './components/Familia';


const App = () => {
  return (
    <Fragment>
      <Header />
      <Nutri />
      <Familia />
    </Fragment>
  )
}

export default App;


