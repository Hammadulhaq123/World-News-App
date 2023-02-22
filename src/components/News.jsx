import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles : [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    // console.log("cdm");
    let url = `https://newsapi.org/v2/everything?q=computer&from=2023-01-22&sortBy=publishedAt&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=1&pageSize=12`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  handleNextPage = async () => {
    // console.log("prev")
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/12))){
      let url = `https://newsapi.org/v2/everything?q=headlines&from=2023-01-22&sortBy=publishedAt&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=${this.state.page + 1}&pageSize=12`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData)
      this.setState({articles: parsedData.articles});
      this.setState({articles: parsedData.articles});
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      })
    }
    
  }
  handlePrevPage = async () => {
    // console.log("next");

    let url = `https://newsapi.org/v2/everything?q=headlines&from=2023-01-22&sortBy=publishedAt&apiKey=723fb939ad074eec8d4f5d7e46a66d3a&page=${this.state.page - 1}&pageSize=12`;
    this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({articles: parsedData.articles});
    this.setState({articles: parsedData.articles});
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    })
  }
  render() {
    return (
      <div className='flex flex-col my-28 ml-60'>
        <h2 className='text-4xl text-center mb-8 text-white'>World News | Top Headlines</h2>
        {this.state.loading && <Spinner />}
        
        <div className="flex gap-3 mx-24 mt-5 flex-wrap">
        
          {!this.state.loading && this.state.articles.map((element)=>{
            return(
              <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
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