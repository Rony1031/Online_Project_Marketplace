import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuyerLoginForm from "./components/auth/BuyerLoginForm";
import BuyerRegisterForm from "./components/auth/BuyerRegisterForm";
import SellerLoginForm from "./components/auth/SellerLoginForm";
import SellerRegisterForm from "./components/auth/SellerRegisterForm";
import BuyerDashboard from "./components/dashboard/BuyerDashboard";
import SellerDashboard from "./components/dashboard/SellerDashboard";
import CreateProjectForm from "./components/project/CreateProjectForm";
import ProjectList from "./components/project/ProjectList";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Authentication Routes */}
        <Route path="/buyer/login" component={BuyerLoginForm} />
        <Route path="/buyer/register" component={BuyerRegisterForm} />
        <Route path="/seller/login" component={SellerLoginForm} />
        <Route path="/seller/register" component={SellerRegisterForm} />

        {/* Buyer Dashboard Routes */}
        <Route path="/buyer/dashboard" component={BuyerDashboard} />

        {/* Seller Dashboard Routes */}
        <Route path="/seller/dashboard" component={SellerDashboard} />

        {/* Project Routes */}
        <Route path="/create-project" component={CreateProjectForm} />
        <Route path="/project-list" component={ProjectList} />
      </Switch>
    </Router>
  );
};

export default App;
