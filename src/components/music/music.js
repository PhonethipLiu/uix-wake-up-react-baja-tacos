import React, { Component } from 'react';
import $ from 'jquery';

class Song extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        value: ''
      }

    }

  handleChange() {
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      value: $('#search').val()

    }
    console.log("button clicked");
    console.log(this.state.value);
    this.getSongs();
  }

  componentDidMount(){
    console.log("mounted");
    this.getSongs();
  }
  
    getSongs() {
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.value}&type=video&key=AIzaSyBBxuBPBuPj38toMJ_ZLRQqLpNQuIVmeRc`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
          <input type="text"  id="search" />
            <button onClick={this.handleChange.bind(this)} type="submit">Search</button>
            {items.map((item, index) => (
              <div key={index}>
                {item.snippet.title}
              </div>
            ))}
          </div>
        );
      }
    }
  }
export default Song;
