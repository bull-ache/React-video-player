/* This way of doing the import creates syntactic sugar, in that
it breaks off the idea of 'Component' so that you
don't have to write React.Component each time. */
import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
      /* Pass the event handler to the element that we
      want to monitor for events. The event type 'Change' is
      a vanilla HTML concept. This was refactored, previously looked
      like this:

      return <input onChange={this.handleInputChange} />;
    }

    handleInputChange(event) {
      console.log(event.target.value);
      }
    }   */

      /* The event handler is a function that should
    be ran whenever an event occurs.  An 'event' object must be passed in as an argument, although you can name it whatever you want. The event object provides information about
    the event that occured. For our SearchBar component, we'll use the event object to get access to the value of the input,
    i.e. the text that is added.*/

    return <input onChange={(event) => console.log(event.target.value)} />;
  }

}


export default SearchBar;

