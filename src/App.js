import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import About from "./pages/about/about.component";
import Gallery from "./pages/gallery/gallery.component";
import Contact from "./pages/contact/contact.component";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import "./variables.scss";

const App = () => (
  <Router>
    <div className="master">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
