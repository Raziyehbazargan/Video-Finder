import React, {Component} from 'react';
//because we are using JSX we need to import React Module

/* a function base component:
const SearchBar = () => {
  return <input />;   // <-- JSX
};
*/

// Refactor from a function base component (above) to a class base component using ES6
// Every class base component has a render() method
// in a Class base component we need to use JSX otherwise it returns error

/* a class base component */
class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange}/>;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
