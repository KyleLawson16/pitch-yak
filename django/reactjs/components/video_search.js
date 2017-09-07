import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyAI8niheRLYsF75iVAriiwLfs4tWT8GUUM';

class VideoSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    this.videoSearch('snowboarding')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
      });
      // equal to ({ videos: videos })
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoList
          videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoSearch;
