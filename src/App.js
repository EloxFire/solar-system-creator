import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';

function App() {
  return(
    <Router>
      <div>
        {/*Alaways on top*/}

        {/*In routes*/}
        <Switch>
          <Route path="/" exact component={props =>
            <div>
              <Home/>
            </div>
          }/>
        </Switch>

        {/*Alaways on bottom*/}
      </div>
    </Router>
  )
}

export default App;
