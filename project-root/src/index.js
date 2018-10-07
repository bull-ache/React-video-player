import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'xxxxx';
// create a new component.
// This component should produce some HTML.
// this component uses a fat arrow to declare the function.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>

  );
}

// Next, is should take the component's generated HTML, and
// place it into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'))