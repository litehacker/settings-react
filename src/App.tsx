//import React from 'react';
import './App.css';
import MegaMenuComponent from './components/megaMenuComponent';
import SettingsComponent from './components/SettingsContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/settings">
            <SettingsComponent/>
          </Route>
          <Route path="/">
            <MegaMenuComponent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
