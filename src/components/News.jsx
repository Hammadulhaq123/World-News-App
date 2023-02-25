import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 11,
    name: "Top Headlines",
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    name: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }

  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  async componentDidMount(){
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData)
    // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    this.updateNews();
  }

  handleNextPage = async () => {
    // console.log("prev")
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/12))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // console.log(parsedData)
    //   this.setState({articles: parsedData.articles});
    //   this.setState({articles: parsedData.articles});
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   })
    // }
    this.setState({page: this.state.page + 1})
    this.updateNews()
  }
  handlePrevPage = async () => {
    // console.log("next");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData)
    // this.setState({articles: parsedData.articles});
    // this.setState({articles: parsedData.articles});
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // })

    this.setState({page: this.state.page - 1})
    this.updateNews()
  }
  render() {
    return (
      <div className='flex flex-col my-28 ml-60'>
        <h2 className='text-4xl text-center mb-8 text-white'>World News | {this.props.name}</h2>
        {this.state.loading && <Spinner />}
        
        <div className="flex gap-3 mx-24 mt-5 flex-wrap">
        
          {!this.state.loading && this.state.articles.map((element)=>{
            return(
              <NewsItem key={element.url} author={element.author} date={element.publishedAt} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            )
          })} 
        </div>
        <div className='flex justify-around align-middle my-20'>
        <button disabled={this.state.page<=1} onClick={this.handlePrevPage} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Previous</button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pages))} onClick={this.handleNextPage} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Next</button>
        </div>
      </div>
    )
  }
}

export default News