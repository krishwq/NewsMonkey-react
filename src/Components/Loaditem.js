import React, { Component } from "react";

export class Loading extends Component {
  render() {
    return (
      <div className="my3">
        <div className="card" aria-hidden="true" style={{
            border: "1px solid",
            borderColor: this.props.mode === "dark" ? "white" : "black",
            boxShadow:this.props.mode === "dark" ? "0px 0px 8px 0.5px white" : "0px 0px 10px 1px black"
          }}>
          <div className="card-body rounded" style={{
              backgroundColor:this.props.mode === "dark" ? "#165185" : "#e1ffff",
              color: this.props.mode === "dark" ? "white" : "black",
            }}>
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
            <a
              href="/"
              className={`btn btm-sm btn-${this.props.mode === "dark" ? "light" : "dark"}`}
              target="blank"
              style={{height:"35px" ,width:"100px"}}
            >
          
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
