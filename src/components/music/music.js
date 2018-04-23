import React from 'react';
import $ from 'jquery';
import './music.css';
import song from '../../images/add_song.png';
import Bootstrap, {Row, Col} from 'bootstrap';
// import rebase from 're-base';
import { saveSongs } from '../../config/userAuth';
import { googleProvider, rebase }  from '../../config/constants';
// import {saveSongs} from '../../config/userAuth';



class Song extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        value: ''
      }

      this.sendtoFirebase= this.sendtoFirebase.bind(this);

    }

  handleChange() {
    this.State = {
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



    sendtoFirebase(e) {
      console.log(this.state.items[e.target.id].snippet.title);
      console.log(e.target.id);
        // saveSongs(user, this.state.items[e.target.id].snippet.title)
        return rebase.initializedApp.database().ref().child(`users/${this.props.userObj.uid}/info/songs`)
          .push({
            song: this.state.items[e.target.id].snippet.title,
            image: this.state.items[e.target.id].snippet.thumbnails.default.url,
            uid: this.props.userObj.uid
          })
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="Music-body"> 
          <input className="Music-input" type="text"  id="search" placeholder="SEARCH YOUTUBE"/>
            <button className="Music-btn" onClick={this.handleChange.bind(this)} type="submit">Search</button>
            {items.map((item, index) => (
              <div key={index} onClick={this.sendtoFirebase}>
                <img src={item.snippet.thumbnails.default.url} alt="song thumbnail" className="song_image"/>
                {item.snippet.title}
                {item.snippet.channelTitle}
                <img src={song} alt="add song" className="Music-addSongImage" width="20" id={index}/>
              </div>
            ))}
          </div>
        );
      }
    }

  }
export default Song;
