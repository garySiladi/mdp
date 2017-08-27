// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from '../store';
import { Header } from '../components/header';
import { Homepage } from '../components/home-page';
import { Analysis } from '../components/analysis-page';
import { PatientPage } from '../components/patient-page';

class App extends React.Component<{}> { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Store>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/analysis" component={Analysis} />
            <Route path="/patient" component={PatientPage} />
          </div>
        </Router>
      </Store>
    );
  }
}

export default App;
