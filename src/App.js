import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Events from "./pages/events/events.component";
import About from "./pages/about/about.component";
import Gallery from "./pages/gallery/gallery.component";
import Submission from "./pages/submission/submission.component";
import Contact from "./pages/contact/contact.component";

import Header from "./components/header/header.component";
import Schedule from "./components/schedule/schedule.component";
import Register from "./components/register/register.component";
import Footer from "./components/footer/footer.component";

import "./variables.scss";

const App = () => (
  <Router>
    <div className="master">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/submit" component={Submission} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
