import React from "react";

let str = "This is a variable inside the component";

let test = <div>test</div>;

function QuizPage({ children }) {
  return (
    <div>
      <h2>{children}</h2>
      <p>{str}</p>
      <div id="root"></div>
      {/* <nav class="navbar navbar-expand-lg navbar-light" id="navbarID">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a id="navbarName" class="navbar-brand" href="/">(Name will go here)</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" id="chatNavbarLogout">
            <button class="btn my-2 my-sm-0" id="logoutBtn" type="submit">Log out</button>
          </form>
        </div>
      </nav> */}
      <div>
        <h1>Greetings!  Welcome to your first day at the Dunder Mifflin Paper Company.</h1>
        <div class="instructions1">
          <p>Now that we’ve completed your orientation we’d like to make sure you are ready to begin! To do that we have a series of questions for you to answer.</p>
        </div>
      </div>

        <div class="row">
            <div class="col-10 offset-1 text-center">
                <h2>
                    <div id="usermsg" class="question"></div>
                </h2>
                <div id="usermsg" class="buttonbox">
                    <button class="answer btn my-2 my-sm-0" data-index="0" value="aChoice" id="aChoice"></button>
                    <button class="answer btn my-2 my-sm-0" data-index="1" value="bChoice" id="bChoice"></button>
                    <button class="answer btn my-2 my-sm-0" data-index="2" value="cChoice" id="cChoice"></button>
                    <button class="answer btn my-2 my-sm-0" data-index="3" value="dChoice" id="dChoice"></button>
                </div>
                <div class="output">
                    <div id="usermsg" class="status"></div>
                </div>
                <button class="startgame btn my-2 my-sm-0" value="startgame" id="startgame" name="submitBtn" type="submit"></button>
            </div>
        </div>
    </div>
  );
}

export default QuizPage;
