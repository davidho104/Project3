import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Charts from "./pages/Charts";
import NoMatch from "./pages/NoMatch";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Manager from "./pages/Manager";
import Employee from "./pages/Employee";
import Quiz from "./pages/Quiz";
import Create from "./pages/Create";
import EditQuiz from "./pages/EditQuiz";
import Home from "./pages/Home";
import Help from "./pages/Help";
import HelpEmployee from "./pages/HelpEmployee";
import LandingPage from "./pages/Landing";
import Summary from "./pages/Summary";
import Profile from "./pages/Profile";
import ProfileManager from "./pages/ProfileManager";
import Resources from "./pages/Resources";
import EditResources from "./pages/EditResources";
import Test from "./pages/Test";
// import NavTabs from "./components/NavTabs";
// import Background from "./officeBackground.jpg";
// import Nav from "./components/Nav";
import "./style.css";

var user = {
  uid: "31115",
  id: 2,
  email: "jim@dm.com",
  firstname: "Jim"
}

class App extends Component {

  state = {
    user,
    isAuth: true,
    isManager: false
  }

  render() {
    return (
      <Router>
        <div>

          <Switch>

            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route exact
              path="/"
              render={(props) => {

                return (

                  <div className="row">
                    <div className="col-6 offset-3">
                      <div id="loginBlock">
                        <p className="signIn" align="center">Welcome</p>
                        <form className="form1">
                          <input className="emailInput" type="email" align="center" placeholder="Username" />
                          <input className="passwordInput" type="password" align="center" placeholder="Password" />
                          <p className="signInButton" align="center">Sign In</p>
                          <p className="forgotPassword" align="center"><a href="/"></a>Forgot Password?</p>
                        </form>
                        <br />
                        <div id="createAccount2">

                          <div className="col-6 offset-3 text-center">
                            <Link to="/"><span className="createAccount">Don't Have An Account?</span></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )

              }}
            />



            <Route exact path="/about" component={About} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/helpemployee" component={HelpEmployee} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/charts" component={Charts} />

            {/* <Route exact path="/manager" component={Manager} /> */}
            <Route exact
              path='/manager'
              render={(props) => <Manager uid={this.state.user.uid} firstname={this.state.user.firstname} />}
            />


            {/* <Route exact path="/employee" component={Employee} /> */}
            <Route exact
              path='/employee'
              render={(props) => <Employee uid={this.state.user.uid} firstname={this.state.user.firstname} />}
            />

            {/* <Route exact path="/quiz" component={Quiz} /> */}
            <Route exact
              path='/quiz'
              render={(props) => <Quiz uid={this.state.user.uid} id={this.state.user.id} firstname={this.state.user.firstname} />}
            />

            <Route exact path="/home" component={Home} />
            <Route exact path="/editresources" component={EditResources} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/landingpage" component={LandingPage} />

            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact
              path='/profile'
              render={(props) => <Profile uid={this.state.user.uid} id={this.state.user.id} />}
            />

            {/* <Route exact path="/profilemanager" component={ProfileManager} /> */}
            <Route exact
              path='/profilemanager'
              render={(props) => <ProfileManager uid={this.state.user.uid} id={this.state.user.id} />}
            />

            <Route exact path="/create" component={Create} />
            <Route exact path="/editquiz" component={EditQuiz} />

            {/* <Route exact path="/summary" component={Summary} /> */}
            <Route exact
              path='/summary'
              render={(props) => <Summary uid={this.state.user.uid} id={this.state.user.id} />}
            />

            {/* <Route exact path="/test" component={Test} /> */}
            <Route exact
              path='/test'
              render={(props) => <Test uid={this.state.user.uid} id={this.state.user.id} />}
            />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
