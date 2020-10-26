import React, { Fragment } from "react";
import { HouseFill } from "react-bootstrap-icons";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import PhotoCard from "./components/PhotoCard";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Fragment>
          <div className="col text-center">
            <Link to="/" className="btn btn-info ">
              <HouseFill color="black" size={50}/>
          </Link>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:id/details" component={PhotoCard} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
