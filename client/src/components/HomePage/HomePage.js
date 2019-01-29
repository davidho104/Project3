import React from "react";

function HomePage({ children }) {
  return (
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <button class="btn btn-danger" id="logoff" type="submit">
            Logoff
          </button>
          <a href="/profile" class="btn btn-primary">
            <span class="fa" />
            Profile Page
          </a>
          <a href="/manager" class="btn btn-primary">
            <span class="fa" />
            Manager Page
          </a>
          <h2>Home Page</h2>
          <p> Member Status:</p>
        </div>
        <div class="card-body" id="recent-member">
          <p class="status" />
          <h2 class="user-id-display">Home Page</h2>
          <p id="display"> </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
