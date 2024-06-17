import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import topheadlines from "./topheadline.json";
import business from "./business.json";
import education from "./education.json";
import entertainment from "./entertainment.json";
import foreign from "./foreign.json";
import genarel from "./genarel.json";
import health from "./health.json";
import politics from "./political.json";
import science from "./science.json";
import sports from "./sports.json";
import technology from "./technology.json";
import weather from "./weather.json";
import ScrollToTop from "./Components/Scrolltotop";

export default class App extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollToElement);
}
handleScrollToElement=()=>{
  if(window.scrollY>200){
    document.getElementById('top').style.display='flex'
  }else{
    document.getElementById('top').style.display='none'
  }
}
  constructor() {
    super();
    this.state = {
      mode: "dark",
    };
  }
  myapikey = process.env.REACT_APP_NEWS_APIKEY;

  state = {
    progress: 0,
  };
  setprogress = (progress) => {
    this.setState({ progress: progress });
  };
  tooglebtn = () => {
    if (this.state.mode === "dark") {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "#c0f5ff";
    } else {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#081f48";
    }
  };
  render() {
    return (
      <Router>
        <div>
          <ScrollToTop/>
          <Navbar tooglebtn={this.tooglebtn} mode={this.state.mode} />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/News-react">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="india"
                pagesize={12}
                main="q=india"
                chategory="everything"
                api={this.myapikey}
                content="Top Headlines"
                article={topheadlines}
              />
            </Route>
            <Route exact path="/science">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="science"
                pagesize={12}
                main="q=science"
                chategory="everything"
                api={this.myapikey}
                content="Science News"
                article={science}
              />
            </Route>
            <Route exact path="/technology">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="technology"
                pagesize={12}
                main="q=technology"
                chategory="everything"
                api={this.myapikey}
                content="Technology News"
                article={technology}
              />
            </Route>
            <Route exact path="/foreign">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="foreign"
                pagesize={12}
                main="q=foreign"
                chategory="everything"
                api={this.myapikey}
                content="Foreign News"
                article={foreign}
              />
            </Route>
            <Route exact path="/sports">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="sports"
                pagesize={12}
                main="country=in&category=sports"
                chategory="top-headlines"
                api={this.myapikey}
                content="Sports News"
                article={sports}
              />
            </Route>
            <Route exact path="/health">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="health"
                pagesize={12}
                main="country=in&category=health"
                chategory="top-headlines"
                api={this.myapikey}
                content="Health News"
                article={health}
              />
            </Route>
            <Route exact path="/genarel">
              <News
                setprogress={this.setprogress}
                key="general"
                mode={this.state.mode}
                pagesize={12}
                main="country=in&category=general"
                chategory="top-headlines"
                api={this.myapikey}
                content="Genarel News"
                article={genarel}
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setprogress={this.setprogress}
                key="entertainment"
                mode={this.state.mode}
                pagesize={12}
                main="country=in&category=entertainment"
                chategory="top-headlines"
                api={this.myapikey}
                content="Entertainment News"
                article={entertainment}
              />
            </Route>
            <Route exact path="/business">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="business"
                pagesize={12}
                main="country=in&category=business"
                chategory="top-headlines"
                api={this.myapikey}
                content="Business News"
                article={business}
              />
            </Route>
            <Route exact path="/education">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="education"
                pagesize={12}
                main="q=education"
                chategory="everything"
                api={this.myapikey}
                content="Education News"
                article={education}
              />
            </Route>
            <Route exact path="/political">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="politics"
                pagesize={12}
                main="q=politics"
                chategory="everything"
                api={this.myapikey}
                content="Political News"
                article={politics}
              />
            </Route>
            <Route exact path="/weather">
              <News
                setprogress={this.setprogress}
                mode={this.state.mode}
                key="weather"
                pagesize={12}
                main="q=weather"
                chategory="everything"
                api={this.myapikey}
                content="Weather News"
                article={weather}
              />
            </Route>
          </Switch>
        </div>
        <div className="top" id="top" onClick={()=>{window.scrollTo({top:0,behavior:'smooth'})}}style={{backgroundColor:this.state.mode==='dark'?'white':'black'}} >
        <i className="fa-solid fa-arrow-up fa-beat" style={{fontSize:'25px',color:this.state.mode==='dark'?'black':'white'}}></i>
        </div>
      </Router>

    );
  }
}
