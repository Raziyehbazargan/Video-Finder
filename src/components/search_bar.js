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
// just class base component has state object
// all JS classes have a special function call "constructor", it's the first and only function
// automatically whenever a new instance of the class is created.
// "super" : is the parent method ( here Component ) that we are calling that with probs
// "state" is a plain JS object that exist on any class base component. the name of object property is arbitary.
// Always manipulate "state" in the component with "this.setState"
/* a class base component */
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };
  }

  render() {
    return <input onChange={ event => this.setState({ term: event.target.value})}/>;
    // for one line code we can also use ES6 synatx:
    //    return <input onChange={event => console.log(event.target.value)}/>;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
