// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Store } from '../store';
import { Header } from '../components/header';

const microApp = () => <h1>Hello</h1>;

class App extends React.Component<{}> { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Store>
        <Router>
          <div>
            <Header />
            <Route path="/" component={microApp} />
          </div>
        </Router>
      </Store>
    );
  }
}

export default App;
