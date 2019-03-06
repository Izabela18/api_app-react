import React, { Component } from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';



class SideNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

componentDidMount() {

const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=cfd9623eb46e40618a778979a507f0ba`;


axios.get(url)
.then((response) => {
  this.setState({
    sidenews: response.data.articles
  })
})
.catch((error) => console.log(error));

}

  renderItems() {
    return this.state.sidenews.map((item) => (
      <SingleSide key={item.url} item={item} />
    ));
  }

  render() {
    return (
      <div className="collection">
      {this.renderItems()}
      </div>
    );
  }
}
export default SideNews;
