import React, { Component } from 'react'

export class NewsBox extends Component {
  
  render() {
    let {title,description,urlToImage,url} = this.props;
    return (
      <div>
        <div className="card" styel = {{width:"18rem"}}>
            <img src={!urlToImage ? "https://images.wsj.net/im-841941/social":urlToImage} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"88%"}}>
                  {this.props.name}
                </span>
                <p className="card-text"><small className="text-body-secondary">{this.props.author ? this.props.author:"Unknown"} on {new Date(this.props.publishedAt).toGMTString()}</small></p>
                <a href={url} className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsBox