import React from "react";
import PropTypes from "prop-types";
import "./Alert.css";

class Alert extends React.Component {
  static propsTypes = {
    hideComponent: PropTypes.bool,
    contentTitle: PropTypes.string,
    content: PropTypes.string,
    children: {
      title: PropTypes.string,
      content: PropTypes.string,
      timeSeconds: PropTypes.number,
    },
  };
  render() {
    const { changeSelected, contentTitle, content, children } = this.props;

    return (
      <div className="Alert">
        <h1>{contentTitle}</h1>
        <p>{content}</p>
        <ul>
          {children.title}
          {children.content.map((e) => (
            <button type="button" id={e.id} onClick={changeSelected}>
              {e.item}
            </button>
          ))}
        </ul>
      </div>
    );
  }
}
Alert.defaultProps = {
  children: {
    title: "My Favorite Things",
    content: [
      { id: 1, item: "Batata" },
      { id: 2, item: "Estudar" },
      { id: 3, item: "Bar no Centro" },
      { id: 4, item: "Sambinha Triste" },
    ],
    timeSeconds: 3,
  },
};

export default Alert;
