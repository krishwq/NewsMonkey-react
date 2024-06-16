import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Loading extends Component {
  render() {
    return (
      <div className="my3">
        <div className="card" aria-hidden="true">
          <div className="card-body">
            <h5 className="card-title placeholder-glow">
              <span className="placeholder col-6"></span>
            </h5>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-7"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <Link
              className="btn btn-primary disabled placeholder col-6"
              aria-disabled="true"
              to="/"
            ></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
