import React, { Component } from "react";
import { JobList } from "./JobList";
import JobDetail from "./JobDetail";

class JobSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobSelected: null,
    };
  }

  changeJob = (id) => this.setState({ jobSelected: id });

  render() {
    return (
      <div className="row">
        <JobList
          jobSelected={this.state.jobSelected}
          changeJob={this.changeJob}
          jobs={this.props.jobs}
        />
        <JobDetail
          jobSelected={this.state.jobSelected}
          jobs={this.props.jobs}
        />
      </div>
    );
  }
}

export default JobSearch;
