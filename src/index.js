//Create a new component. This component should produce soome HTML.
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;
const App = () => {
  return (
     <div>
        <SearchBar />
     </div>
  );
}

//Take this component's generetaed HTML and put it in the page. ( DOM )
ReactDOM.render(<App />, document.querySelector('.container'));
