import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
