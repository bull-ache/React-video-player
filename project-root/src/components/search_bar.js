/* This way of doing the import creates syntactic sugar, in that
it breaks off the idea of 'Component' so that you
don't have to write React.Component each time. */
import React, { Component } from 'react';

class SearchBar extends Component {
  // initialize state with the constructor method
  constructor(props) {
    super(props);

    this.state =  {term: ''};
  }

  render() {
    return (
       /* this makes it a controlled component */
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />Value of the input: {this.state.term}
        </div>
      );
    }
}


export default SearchBar;

