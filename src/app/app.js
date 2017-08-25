// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from '../store';
import { Header } from '../components/header';
import { Homepage } from '../components/home-page';
import { Graph } from '../components/chart';

class App extends React.Component<{}> { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Store>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/patient" component={Graph} />
          </div>
        </Router>
      </Store>
    );
  }
}

export default App;
