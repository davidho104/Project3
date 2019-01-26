import React, { Component } from "react";


var str = "Create Page"

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeSelected: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    let employeePicked;
    if (e.target.id == "employeePick") {
      employeePicked = true;
    } else {
      employeePicked = false;
    }
    this.setState({employeeSelected: employeePicked})
  };


  render() {
    let highlightEmployee;
    let highlightManager;
    const highlightPick = {
      backgroundColor: "rgb(223, 100, 86)",
      borderWidth: "4px"
    }

    if (this.state.employeeSelected) {
      highlightEmployee = highlightPick
    } else {
      highlightManager = highlightPick
    }
    console.log(this.state.employeeSelected);
    return (
      <div className="row" >
        <div className="col-6 offset-3">
          <div id="loginBlock">
            <p className="signIn" align="center">Choose Account Type</p>
            <hr />
            <form className="form1">
              <div className="row">
                <div className="col-4 offset-1 text-center">
                  <input type="button" className="btn btn-lg" id="employeePick" onClick={this.handleClick} value="Employee" style={highlightEmployee} />
                </div>
                <div className="col-4 offset-1 text-center">
                  <input type="button" className="btn btn-lg" id="managerPick" onClick={this.handleClick} value="Manager" style={highlightManager} />
                </div>
                <br /><br /><br />
              </div>
              <input className="loginInputs" id="nameInput" type="text" align="center" placeholder="Username" />
              <input className="loginInputs" id="passwordInput" type="password" align="center" placeholder="Password" />
              <input className="loginInputs" id="emailInput" align="center" placeholder="Email" />
              <br /><br />
              <div className="row">
                <div className="col-4 offset-4 text-center">
                  <input type="submit" className="btn btn-lg" id="createSubmit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
