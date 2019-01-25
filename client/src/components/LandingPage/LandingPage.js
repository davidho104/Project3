import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function LandingPage({ children }) {


  return (

    <div className="row">
      <div className="col-6 offset-3">
        <div id="loginBlock">
          <p className="signIn" align="center">Welcome</p>
          <form className="form1">
            <input className="emailInput" type="email" align="center" placeholder="Username" />
            <input className="passwordInput" type="password" align="center" placeholder="Password" />
            <p className="signInButton" align="center">Sign In</p>
            <p className="forgotPassword" align="center"><a href="#"></a>Forgot Password?</p>
          </form>
          <br />
          <div id="createAccount2">

            <div className="col-6 offset-3 text-center">
              <Link to="/create"><span className="createAccount">Don't Have An Account?</span></Link>
              {/* <span target="_blank" className="createAccount" align="center"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
