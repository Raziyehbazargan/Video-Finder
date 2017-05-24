import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

// 1- Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
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
