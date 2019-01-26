import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Charts from "./pages/Charts";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Manager from "./pages/Manager";
import Quiz from "./pages/Quiz";
import Create from "./pages/Create";
import CreateQuiz from "./pages/CreateQuiz";
import Home from "./pages/Home";
import LandingPage from "./pages/Landing";
import Profile from "./pages/Profile";
import NavTabs from "./components/NavTabs";
import Background from "./officeBackground.jpg";

      // import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/charts" component={Charts} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/manager" component={Manager} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/landingpage" component={LandingPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/createQuiz" component={CreateQuiz} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
