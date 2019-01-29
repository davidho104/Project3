import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "./utils/API";
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

// var user = {
//   uid: "31115",
//   id: 2,
//   email: "jim@dm.com",
//   firstname: "Jim"
// }

// -- user.data:
// createdAt: "2019-01-27T18:36:40.000Z"
// departmentId: null
// email: "jim@dm.com"
// firstName: "Jim"
// id: 2
// lastName: "Halpert"
// permissionId: 2
// phone: "570-123-0002"
// picture: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jim-halpert.jpg/220px-Jim-halpert.jpg"
// updatedAt: null
// username: "jim"



class App extends Component {

  state = {
    user: {},
    email: "",
    password: "",
    uid: "00000",
    isAuth: true,
    isManager: false,
    id1: 1,
    id2: 2,
    firstname1: "Michael",
    firstname2: "Jim"
  }

  handleInputChange1 = event => {
    const email = event.target.value;
    console.log(email);
    this.setState({
      email: email
    });
  };

  handleInputChange2 = event => {
    const password = event.target.value;
    console.log(password);
    this.setState({
      password: password
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    API.getUserByEmail(this.state.email)
      .then(res => {
        console.log(res.data); 
        this.setState({user: res.data}); 
        API.checkRoleByEmail(this.state.email)
          .then(res => {
             if (res.data.role === "employee") {
                window.location="employee";
             } else {
                window.location="manager";
             }
          })
        
      })
      .catch(err => console.log(err));
  };

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
                          <input className="emailInput" type="email" align="center" placeholder="Username" value={this.state.email} onChange={this.handleInputChange1}/>
                          <input className="passwordInput" type="password" align="center" placeholder="Password" value={this.state.password} onChange={this.handleInputChange2} />
                          <p className="signInButton" align="center" onClick={this.handleFormSubmit}>Sign In </p>
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
              render={(props) => <Manager uid={this.state.uid} firstname={this.state.firstname1} />}
            />


            {/* <Route exact path="/employee" component={Employee} /> */}
            <Route exact
              path='/employee'
              render={(props) => <Employee uid={this.state.uid} firstname={this.state.firstname2} />}
            />

            {/* <Route exact path="/quiz" component={Quiz} /> */}
            <Route exact
              path='/quiz'
              render={(props) => <Quiz uid={this.state.uid} id={this.state.id2} firstname={this.state.firstname2} />}
            />

            <Route exact path="/home" component={Home} />
            <Route exact path="/editresources" component={EditResources} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/landingpage" component={LandingPage} />

            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact
              path='/profile'
              render={(props) => <Profile uid={this.state.uid} id={this.state.id2} />}
            />

            {/* <Route exact path="/profilemanager" component={ProfileManager} /> */}
            <Route exact
              path='/profilemanager'
              render={(props) => <ProfileManager uid={this.state.uid} id={this.state.id1} />}
            />

            <Route exact path="/create" component={Create} />
            <Route exact path="/editquiz" component={EditQuiz} />

            {/* <Route exact path="/summary" component={Summary} /> */}
            <Route exact
              path='/summary'
              render={(props) => <Summary uid={this.state.uid} id={this.state.id2} />}
            />

            {/* <Route exact path="/test" component={Test} /> */}
            <Route exact
              path='/test'
              render={(props) => <Test uid={this.state.uid} id={this.state.id2} />}
            />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
