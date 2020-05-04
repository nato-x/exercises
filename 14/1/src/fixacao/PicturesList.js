import React, { Component } from 'react';

class PicturesList extends Component {
  render() {
    return (
      <ul>
        {console.log(React.Children)}
        {this.props.children.map((child) => (
          <li>{child}</li>
        ))}
      </ul>
    );
  }
}

export default PicturesList;
