
import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './App';
import './style/index.less';

const DemoList = lazy('./views/Demo');
const Home = lazy('./views/Home');

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Suspense fallback="loading">
            <Switch>
              <Route exact path="/web" component={Home} />
              <Route path="/web/Demo" component={DemoList} />
            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>
    );
  }
}
