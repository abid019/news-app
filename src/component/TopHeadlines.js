import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
export class TopHeadlines extends Component {
  static defaultProps = {
    country : 'us',
    pageSize : 9,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
 
  
  constructor(){
    
    super();
    this.state = {
      articles : [],
      load : false,
      page:1,
      
      totalResults : 0
    }
  }
  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe40353bba814254a134667b50fda0bb&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({load : true})
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles : parseData.articles,
      totalResults : parseData.totalResults,
      load : false
    })

  }
  preclickHandler = async ()=>{
    if(this.state.page - 1 <= 1){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${'us'}&category=${this.props.category}&apiKey=fe40353bba814254a134667b50fda0bb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.setState({load : true})
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({
        articles : parseData.articles,
        page : this.state.page - 1,
        load : false
      })
    }
  }
  nextclickHandler = async()=>{
    if(this.state.page + 1 > Math.ceil(this.totalResults/this.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${'us'}&category=${this.props.category}&apiKey=fe40353bba814254a134667b50fda0bb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({load : true})
      let data = await fetch(url)
      let parseData = await data.json()
      this.setState({
        articles : parseData.articles,
        page : this.state.page + 1,
        load : false
      })
    }
  }
  render() {
    return (
      
      <div className='container my-3'>
      
        <h2>NewsLetter | Top Headlines</h2>
        {this.state.load && <Spinner/>}
        <div className="row">
          {!this.state.load && this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url}>
            <NewsBox title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} urlToImage={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} name={element.source.name}/>
            </div>
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} className="btn btn-outline-dark" onClick={this.preclickHandler}>←Prev</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.totalResults/this.pageSize)} className="btn btn-outline-dark" onClick={this.nextclickHandler}>Next→</button>
        </div>
      </div>
    )
  }
}

export default TopHeadlines