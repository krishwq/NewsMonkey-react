import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {
    mystyle: null,
  };
  render() {
    let { tooglebtn, mode } = this.props;
    return (
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-${
          mode === "dark" ? "dark" : "info"
        } bg-${mode === "dark" ? "dark" : "info"} `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/News-react">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li id="nav-item-political" onMouseEnter={()=>{
                document.getElementById('nav-item-political').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-political').style.backgroundColor='transparent';
              }}>

                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Political News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Political News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/political"
                >
                  Political
                </Link>
              </li>
              <li id="nav-item-education"
              onMouseEnter={()=>{
                document.getElementById('nav-item-education').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-education').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Education News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Education News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/education"
                >
                  Education
                </Link>
              </li>
              <li id="nav-item-business"
              onMouseEnter={()=>{
                document.getElementById('nav-item-business').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-business').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Business News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Business News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li id="nav-item-entertainment"
              onMouseEnter={()=>{
                document.getElementById('nav-item-entertainment').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-entertainment').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Entertainment News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Entertainment News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li id="nav-item-genarel"
              onMouseEnter={()=>{
                document.getElementById('nav-item-genarel').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-genarel').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Genarel News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Genarel News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/genarel"
                >
                  Genarel
                </Link>
              </li>
              <li id="nav-item-health"
              onMouseEnter={()=>{
                document.getElementById('nav-item-health').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-health').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Health News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Health News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li id="nav-item-science"
              onMouseEnter={()=>{
                document.getElementById('nav-item-science').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-science').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Science News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Science News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li id="nav-item-sports"
              onMouseEnter={()=>{
                document.getElementById('nav-item-sports').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-sports').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Sports News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Sports News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li id="nav-item-technology"
              onMouseEnter={()=>{
                document.getElementById('nav-item-technology').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-technology').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Technology News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Technology News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li id="nav-item-foreign"
              onMouseEnter={()=>{
                document.getElementById('nav-item-foreign').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-foreign').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Foreign News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Foreign News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/foreign"
                >
                  Foreign
                </Link>
              </li>
              <li id="nav-item-weather"
              onMouseEnter={()=>{
                document.getElementById('nav-item-weather').style.backgroundColor=mode==='dark'?'black':'#0de9ff';
              }}
              onMouseLeave={()=>{
                document.getElementById('nav-item-weather').style.backgroundColor='transparent';
              }}>
                <Link
                  style={{
                    color:
                      mode === "dark" &&
                      document.title === "NewsMonkey-Weather News"
                        ? "white"
                        : mode === "light" &&
                          document.title === "NewsMonkey-Weather News"
                        ? "black"
                        : mode === "dark"
                        ? "rgba(255,255,255,0.55)"
                        : "rgba(0,0,0,0.65)",
                  }}
                  id="button"
                  to="/weather"
                >
                  Weather
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className={`form-check-input`}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={tooglebtn}
              />
              <label
                className={`"form-check-label text-${
                  mode === "dark" ? "light" : "dark"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {mode === "dark" ? "Enable-Lightmode" : "Enable-Darkmode"}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
