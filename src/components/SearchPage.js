import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Form } from "react-bootstrap";

class SearchPage extends Component {
  state = {
    position: "",
    location: "",
  };

  render() {
    return (
      <>
        <div className="search mt-2 col-sm-12">
          <>
            <div className="m-auto">
              <Router>
                <Form>
                  <div className="d-flex ">
                    <div className="col col-md-5">
                      <Form.Label>
                        <FontAwesomeIcon
                          icon={faBriefcase}
                          id="portfolioIcon"
                        />{" "}
                        What
                      </Form.Label>
                    </div>
                    <div className="col col-md-5">
                      <Form.Label>
                        {" "}
                        <FontAwesomeIcon
                          icon={faMapMarker}
                          id="portfolioIcon"
                        />{" "}
                        Where
                      </Form.Label>
                    </div>
                    <div className="col"></div>
                  </div>
                  <div className="d-flex ">
                    <div className="col col-md-5">
                      <Form.Control
                        type="text"
                        placeholder="Job Position or Tech"
                        id="position"
                        name="position"
                        style={{ borderRadius: "20px" }}
                        onChange={(e) => this.props.onChangeHandler(e)}
                        value={this.props.position}
                      />
                    </div>
                    <div className="col col-md-5">
                      <Form.Control
                        type="text"
                        placeholder="Location"
                        id="location"
                        name="location"
                        style={{ borderRadius: "20px" }}
                        onChange={(e) => this.props.onChangeHandler(e)}
                        value={this.props.joblocation}
                      />
                    </div>
                    <div className="col">
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.props.handleFetchJob(
                            this.props.position,
                            this.props.joblocation
                          )
                        }
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </Form>
              </Router>
            </div>
          </>
        </div>
      </>
    );
  }
}

export default withRouter(SearchPage);
