import React, { Component } from 'react';
import JobList from './components/JobList/JobList';

const API = 'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json';

class App extends Component {

  state = {}

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => 
        this.setState({
        data:data}))
  }

  toggleDescription = (e) => {
    let style = e.currentTarget.querySelector('section').style;
    style.display == false || style.display == "none"?style.display = "block":style.display = "none"
}

  render() {
    return (
      <div className="App">
        <JobList openAd ={this.toggleDescription} ads={this.state.data}/>
      </div>
    );
  }
}

export default App;
