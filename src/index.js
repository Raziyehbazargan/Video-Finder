//Create a new component. This component should produce soome HTML.
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generetaed HTML and put it in the page. ( DOM )

ReactDOM.render(<App />, document.querySelector('.container'));
