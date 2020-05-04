import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  static propTypes = {
    showComponent: PropTypes.bool,
    isDisable: PropTypes.bool,
    content: PropTypes.string,
  };
  render() {
    const { showComponent, content } = this.props;
    return (
      <button type="button" onClick={() => showComponent()}>
        {content}
      </button>
    );
  }
}


export default Button;
