import { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Auth from '../auth/Auth';
import Categories from '../game/Categories';
import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import SongPage from '../game/SongPage';

import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN'),
    userId: window.localStorage.getItem('USER_ID'),
    userName: window.localStorage.getItem('USER_NAME')
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    window.localStorage.setItem('USER_ID', user.id);
    window.localStorage.setItem('USER_NAME', user.name);
    this.setState({ token: user.token });
  }

  render() {
    // const { token } = this.state; (use with favorites later)

    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <Auth {...routerProps}
                    onUser={this.handleUser} />
                )}
              />

              <Route path="/categories" exact={true}
                render={routerProps => (
                  <Categories {...routerProps} />)}
              />

              <Route path="/songpage" exact={true}
                render={routerProps => (
                  <SongPage {...routerProps} />)}
              />

              <Route path="/resources/:id"
                render={routerProps => (
                  <div>Implement a page for id {routerProps.match.params.id}</div>
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
