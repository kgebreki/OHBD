import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import Notifications from 'react-notification-system-redux';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import { attemptGetUser } from '_thunks/user';
import { attemptGetContributors } from '_thunks/users';

import LoginPage from '_pages/LoginPage';
import RegisterPage from '_pages/RegisterPage';
import HomePage from '_pages/HomePage';
import SettingsPage from '_pages/SettingsPage';
import LostPage from '_pages/LostPage';

import Navigation from '_organisms/Navigation';
import Footer from '_organisms/Footer';

export default function Main({ location }) {
  const dispatch = useDispatch();
  const { alerts } = useSelector(R.pick(['alerts']));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(attemptGetContributors())
      .then(() => console.log('users data has loaded'))
      .catch(R.identity);
  }, []);
  useEffect(() => {
    dispatch(attemptGetUser())
      .then(() => setLoading(false))
      .catch(R.identity);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return !loading && (
    <div className="has-navbar-fixed-top">
      <Notifications notifications={alerts} />
      <Navigation pathname={location.pathname} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="*" component={LostPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
