import React from "react";

// let str = "This is a variable inside the component";


function QuizPage({ children }) {
  return (

    <div>
      <div>
        <h1>Greetings!  Welcome to your first day at the Dunder Mifflin Paper Company.</h1>
        <div class="instructions1">
          <p>Now that we’ve completed your orientation we’d like to make sure you are ready to begin! To do that we have a series of questions for you to answer.</p>
        </div>
      </div>


        <div class="row">
            <div class="col-10 offset-1 text-center">
                <h2>{children}</h2>
            </div>
        </div>
    </div>
  );
}

export default QuizPage;
