import React, { Component } from "react";
import Button from "./Button";
import Alert from "./Alert";

    const content = [
      { id: 1, item: "a" },
      { id: 2, item: "b" },
      { id: 3, item: "c" },
      { id: 4, item: "d" },
    ];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      isDisableButton: false,
      selected:content[0].item
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  changeShowComponent = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  changeSelected = (event) => {
    this.setState({ selected: event.target.innerText})
  }
  render() {

    return (
      <div className="main">
        <Button
          content={this.state.selected}
          showComponent={this.changeShowComponent}
          value="Título Show"
        />
        {this.state.showModal && (
          <Alert
            hideComponent={this.changeShowComponent}
            contentTitle="Modal"
            content="Coloque qualquer coisa aqui."
            changeSelected={this.changeSelected}
          >


          </Alert>
        )}
      </div>
    );
  }
}

export default App;
