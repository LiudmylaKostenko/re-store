import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import { HomePage, CartPage} from '../pages';
import SHopHeader from "../shop-header";


const App = (  ) => {
   return (
      <main role = 'main' className = 'container'>
           <SHopHeader numItems = {5} total = {210} />
           <Switch>
               <Route
                   path = '/'
                   component = {HomePage}
                   exact />
               <Route
                   path = '/cart'
                   component = {CartPage} />
           </Switch>
      </main>
   )
};

export default App;
