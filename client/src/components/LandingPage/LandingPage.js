import React from "react";
import "./style.css";

function LandingPage({ children }) {


  return (

    <div class="row">
      <div class="col-6 offset-3">
        <div id="loginBlock">
          <p class="signIn" align="center">Welcome</p>
          <form class="form1">
            <input class="emailInput" type="email" align="center" placeholder="Username" />
            <input class="passwordInput" type="password" align="center" placeholder="Password" />
            <p class="signInButton" align="center">Sign In</p>
            <p class="forgotPassword" align="center"><a href="#"></a>Forgot Password?</p>
          </form>
          <br />
          <div id="createAccount2">

            <div class="col-6 offset-3 text-center">
              <a href="./createAccount.html" target="_blank" class="createAccount" align="center">Don't have an account?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
