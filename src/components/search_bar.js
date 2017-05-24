import React from 'react';
//because we are using JSX we need to import React Module

/*const SearchBar = () => {
  return <input />;   // <-- JSX
};*/

// Refactor from a function base component (above) to a class base component using ES6
// Every class base component has a render() method
class SearchBar extends React.component {
  render() {
    return <input />;
  }
}

export default SearchBar;
