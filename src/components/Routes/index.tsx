import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../Home';
import { Login } from '../Login';
import { Navbar } from '../Shared/Navbar';
import { Register } from '../Register';
import { Reinforcement } from '../Reinforcement';
import { GeneralTest } from '../GeneralTest';

import { Profile } from '../Profile';


export const Routes = ()=> {
  return (
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/navbar" component={Navbar}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/profile" component={Profile}></Route>      
      <Route path="/reinforcement/:type" component={Reinforcement}></Route>
      <Route path="/generaltest" component={GeneralTest}></Route>
      <Route path="/" component={Home}/>
    </Switch>
  );
}
