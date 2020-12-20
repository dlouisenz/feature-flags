import React from 'react';
import './App.css';
// import Text from './components/Text';
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home">
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default withLDProvider({
  clientSideID: '5fd2c2524d367c0b9ed62021',
})(App);
