import React, { Component } from "react";
import loading from "./loading.gif";
// import Loaditem from "./Loaditem";

export class Load extends Component {
  render() {
    return (
      <>
        <div className="align-middle text-center">
          <img src={loading} alt="loading" />
        </div>
        {/* <div className="container my-3">
          <div className="row">
            <div className="col-4 mb-3">
              <Loaditem/>
            </div>
            <div className="col-4 mb-3">
              <Loaditem/>
            </div><div className="col-4 mb-3">
              <Loaditem/>
            </div>
            {/* <div className="col-4 mb-3">
              <Loaditem/>
            </div><div className="col-4 mb-3">
              <Loaditem/>
            </div><div className="col-4 mb-3">
              <Loaditem/>
            </div> 
            </div>
        </div> */} 
      </>
    );
  }
}

export default Load;
