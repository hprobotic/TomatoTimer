import React from 'react';
import './Quotes.css';


const QUOTE_URL = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`
const TIME_UPDATE_QUOTE = 1000 * 10

class Quotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: "Our of difficulties grow miracles",
      title : "JEAN DE LA BRUYERE"
    }
  }

  componentWillMount() {
    let self = this;
    setInterval(() => {
      fetch(QUOTE_URL)
      .then((data) => data.json())
      .then((json) => {
        self.setState({
          content: json[0].content,
          title: json[0].title
        })
      })
    }, TIME_UPDATE_QUOTE);
  }

  render() {
    return (
      <div className="quotes">
        <p className="quote">{this.state.content}</p>
        <p className="author">{this.state.title}</p>
      </div>
    )
  }
}

export default Quotes;
