import React, { Component } from "react";

export class Newsitem extends Component {
  ischeck = false;
  constructor() {
    super();
    this.state = {
      share: <i className="fa-regular fa-heart"></i>,
    };
  }

  like = () => {
    if (!this.ischeck) {
      this.setState({
        share: (
          <i className="fa-solid fa-heart" style={{ color: "#ef6b6b" }}></i>
        ),
      });
      this.ischeck = true;
    } else {
      this.setState({
        share: <i className="fa-regular fa-heart"></i>,
      });
      this.ischeck = false;
    }
  };
  render() {
    let { title, description, imageurl, newsurl, mode, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            border: "1px solid",
            borderColor: mode === "dark" ? "white" : "black",
            boxShadow:mode === "dark" ? "0px 0px 8px 0.5px white" : "0px 0px 10px 1px black"
          }}
        >
          <div>
          <span
            className=" badge rounded bg-danger"
            style={{ display:'flex',justifyContent:'flex-end',position:'absolute',right:'0' }}
          >
            {source}
          </span>
          </div>
          <img src={imageurl} className="card-img-top rounded" alt="..." />
          <div
            className="card-body"
            style={{
              backgroundColor: mode === "dark" ? "#165185" : "#e1ffff",
              color: mode === "dark" ? "white" : "black",
            }}
          >
            <h5 className="card-title">
              {title}...{" "}
              <span className="badge rounded-pill text-bg-success">Published</span>
            </h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsurl}
              className={`btn btm-sm btn-${mode === "dark" ? "light" : "dark"}`}
              target="blank"
            >
              Read More
            </a>
            <span className="float-end">
              <button
                type="button"
                className="btn btn-link"
                onClick={this.like}
                style={{ color: mode === "dark" ? "white" : "black" }}
              >
                {this.state.share}
              </button>
              <button
                type="button"
                className="btn btn-link"
                style={{ color: mode === "dark" ? "white" : "black" }}
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: title,
                        url: newsurl,
                      })
                      .then(() => {})
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    alert("Brouser doesn,t support this web share api");
                  }
                }}
              >
                <i className="fa-solid fa-share-nodes"></i>
              </button>
            </span>
          </div>
          <div className="card-footer" style={{backgroundColor:mode==='dark'?'#0a3d7b':'#c2e4ec',color:mode==='dark'?'white':'black'}}>
            <small>
              By {author === null ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
