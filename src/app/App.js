import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AboutUs from '../about/AboutUs';
import Auth from '../auth/Auth';
import Categories from '../game/Categories';
import Footer from './Footer';
import Header from './Header';
import Home from '../home/Home';
import LeaderboardPage from '../leaderboard/LeaderboardPage';
import ResultsPage from '../results/ResultsPage';
import SongPage from '../game/SongPage';

import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN'),
    userId: window.localStorage.getItem('USER_ID'),
    userName: window.localStorage.getItem('USER_NAME'),
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    window.localStorage.setItem('USER_ID', user.id);
    window.localStorage.setItem('USER_NAME', user.name);
    this.setState({ token: user.token });
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Header isLoggedIn={!!this.state.token} />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}
                    onUser={this.handleUser} />
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
                  <Categories uName={this.state.userName} {...routerProps} />)}
              />

              <Route path="/songpage" exact={true}
                render={routerProps => (
                  <SongPage {...routerProps} />)}
              />

              <Route path="/resultspage" exact={true}
                render={routerProps => (
                  <ResultsPage {...routerProps} />)}
              />

              <Route path="/leaderboard" exact={true}
                render={routerProps => (
                  <LeaderboardPage {...routerProps} />)}
              />

              <Route path="/aboutus" exact={true}
                render={routerProps => (
                  <AboutUs {...routerProps} />)}
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
