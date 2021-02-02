import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.jobSelected !== this.props.jobSelected) {
      this.setState({
        job: this.props.jobs.find(
          (job) =>
            JSON.stringify(job.id) === JSON.stringify(this.props.jobSelected)
        ),
      });
    }
  }

  render() {
    return this.state.job ? (
      <div className="col-md-8 pb-5">
        <div className="row mt-2">
          <div className="col-sm-7">
            <h2>{this.state.job.title}</h2>
            <p>
              <span className="font-weight-bold">Company:</span>{" "}
              {this.state.job.company}
            </p>
            <img
              className="company-logo"
              src={this.state.job.company_logo}
              alt="job selected"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12" style={{ overflow: "hidden" }}>
            <p>
              <span className="font-weight-bold">Location:</span>{" "}
              {this.state.job.location}
            </p>
            <p>
              <span className="font-weight-bold">Description:</span>{" "}
              {this.state.job.description}
            </p>
            <p>
              <span className="font-weight-bold">Employment Type:</span>{" "}
              {this.state.job.type}
            </p>
            <p>
              <span className="font-weight-bold">How to apply:</span>{" "}
              {this.state.job.how_to_apply}
            </p>
            <Link to={this.state.job.url}>
              <Button color="primary">Apply</Button>
            </Link>
          </div>
        </div>
      </div>
    ) : (
      <div className="col-sm-8">
        <div className="row mt-2">
          <div className="col-sm-12">
            <h3>Job Description</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetail;
