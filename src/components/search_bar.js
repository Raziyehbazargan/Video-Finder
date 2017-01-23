import React, { Component } from 'react';
//const Component = React.Component;

// functional base component
// const SearchBar = () => {
//   return <input />;
// };

// class base component
class SearchBar extends Component{
  render() {
    return <input onChange={this.onInputChange}/>
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
