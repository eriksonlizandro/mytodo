import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: [],
    };
  }


  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={(e) => this.updateInput('newItem', e.target.value)}
        />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

export default TextInput;
