import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import BuyerDashboard from './BuyerDashboard';
import SellerDashboard from './SellerDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/buyer-dashboard" component={BuyerDashboard} />
        <Route path="/seller-dashboard" component={SellerDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
