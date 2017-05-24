import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY='AIzaSyAqp4OmEviFz8RWiKzT05v85-46FkxdfZE'

// 1- Create a new class base component. This component should produce some HTML.
class App extends Component {
  constructor(probs) {
    super(probs);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      //console.log(data);
      //ES6 : if a key and peoprty have the same name we can refactor the code:
      //this.setState( {videos: videos });
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
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
