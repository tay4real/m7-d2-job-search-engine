import React, { Component } from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchPage";
import JobSearch from "./components/JobSearch";

class App extends Component {
  state = {
    jobs: "",
    position: "",
    location: "",
  };

  onChangeHandler = (e) => {
    if (e.currentTarget.value !== "") {
      this.setState({
        ...this.state,
        [e.target.name]: e.currentTarget.value,
      });
    }
  };

  handleFetchJob = async (position, location) => {
    let response = await fetch(
      `https://cors-anywhere-lk.herokuapp.com/https://jobs.github.com/positions.json?description=${position}&full_time=true&location=${location}`
    );
    let jobs = await response.json();
    this.setState({ jobs: jobs, position: "", location: "" }, () =>
      console.log(jobs)
    );
  };

  render() {
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>Find a Job</h1>
            </Link>
          </div>
          <SearchBar
            handleFetchJob={this.handleFetchJob}
            onChangeHandler={this.onChangeHandler}
            position={this.state.position}
            joblocation={this.state.location}
          />
        </div>
        <hr />
        <div className="container">
          <Route
            path="/"
            exact
            render={(props) => <JobSearch {...props} jobs={this.state.jobs} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
