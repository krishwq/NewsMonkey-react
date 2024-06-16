import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Load from "./Load";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pagesize: 9,
    totalResult: 0,
  };
  static propTypes = {
    pagesize: PropTypes.number,
    chategory: PropTypes.string,
    api: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsMonkey-${this.props.content}`;
  }
  async componentDidMount() {
    this.props.setprogress(10);
    let url = `https://newsapi.org/v2/${this.props.chategory}?${this.props.main}&apiKey=${this.props.api}&page=1&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsdata = await data.json();
    this.props.setprogress(70);
    this.setState({
      articles: parsdata.articles,
      totalResult: parsdata.totalResults,
      loading: false,
    });
    this.props.setprogress(100);
  }
  fetchMoreData = async () => {
    if (this.state.totalResult > 96) {
      if (this.state.articles.length <= 96) {
        let url = `https://newsapi.org/v2/${this.props.chategory}?${
          this.props.main
        }&apiKey=${this.props.api}&page=${this.state.page + 1}&pagesize=${
          this.props.pagesize
        }`;
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsdata = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsdata.articles),
          totalResult: parsdata.totalResults,
          loading: false,
        });
      }
    } else {
      if (this.state.page <= Math.ceil(this.state.totalResult / 12)) {
        let url = `https://newsapi.org/v2/${this.props.chategory}?${
          this.props.main
        }&apiKey=${this.props.api}&page=${this.state.page + 1}&pagesize=${
          this.props.pagesize
        }`;
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsdata = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsdata.articles),
          totalResult: parsdata.totalResults,
          loading: false,
        });
      }
    }
  };

  render() {
    let { mode } = this.props;
    return (
      <>
        <h1
          className={`text-center text-${mode === "dark" ? "light" : "dark"} `}
          style={{ marginBottom: "35px", marginTop: "80px" }}
        >
          NewsMonkey-{this.props.content}
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.totalResult > 96
              ? this.state.articles.length !== 96
              : this.state.articles.length !== this.state.totalResult
          }
          loader={<Load />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-4" key={element.url}>
                    <Newsitem
                      title={
                        element.title === null ? "" : element.title.slice(0, 45)
                      }
                      description={
                        element.description === null
                          ? ""
                          : element.description.slice(0, 100)
                      }
                      imageurl={
                        element.urlToImage === null
                          ? "https://t4.ftcdn.net/jpg/00/88/18/29/360_F_88182922_w5dCuL3EprD1MNEkQ7wF5rBSLDOz8z6v.jpg"
                          : element.urlToImage
                      }
                      newsurl={element.url}
                      mode={mode}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
