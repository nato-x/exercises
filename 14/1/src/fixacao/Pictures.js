import PropTypes from "prop-types";

import React, { Component } from "react";

class Pictures extends Component {

  static propTypes = {
    alt: PropTypes.string.isRequired,
    height: PropTypes.number,
    children: PropTypes.isRequired,
  };

  render() {
    const { height, src, alt, legenda } = this.props;
    return (
      <div>
        <>
          <img alt={alt} src={src} height={height} />
          <p>{legenda}</p>
        </>
      </div>
    );
  }
}

Pictures.defaultProps = {
  height: 400,
};

export default Pictures;
