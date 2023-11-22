import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import NavComponent from './NavComponent';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavComponent />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <PrivateRoute path="/private" component={PrivatePage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

const PrivatePage = () => {
  // ... (contenido de la página privada)
};

export default App;
