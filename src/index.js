import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY='AIzaSyAqp4OmEviFz8RWiKzT05v85-46FkxdfZE'

// 1- Create a new class base component. This component should produce some HTML.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

      this.videoSearch('surfboards');
    }

    videoSearch(userInput) {
      YTSearch({ key: API_KEY, term: userInput }, (videos) => {
        //console.log(data);
        //ES6 : if a key and peoprty have the same name we can refactor the code:
        //this.setState( {videos: videos });
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      })
    }

  // passing data from parent component(App) to child component(VideoList)
  // it will send the data from parent to child usinf "props"
  render() {
    return (
      <div>
        <SearchBar onSearchUserInputChange={userInput => this.videoSearch(userInput)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
// <div>Hi!</div>: This is JSX, it's looks like HTMl but it's JavaScript
// the main reason of using JSX is to make our component cleaner
// for example this line in JSX is equal as below code in vanilla JavaScript
/*
 return React.createElement(
  "div",
  "",
  null
)
*/


// 2- Take this component's generated HTML and put it on the page (in the DOM)
// ReactDom use to work with DOM
ReactDom.render(<App/>, document.querySelector('.root') );
