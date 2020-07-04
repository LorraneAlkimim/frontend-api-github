import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

export default function Routes(){
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Favorites} path="/favorites" />
    </BrowserRouter>
  )
}
