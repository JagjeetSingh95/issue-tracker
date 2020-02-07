import React from 'react';
import { Router, Route, Switch } from "react-router";
import './App.css';
import ProjectDetail from './containers/ProjectDetail';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={ProjectDetail} />
      </Switch>
    </Router>
  );
}

export default App;
