import React from "react";
import "./App.css";
import Card from "./componets/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: localStorage.getItem("dogImg") || "",
      loading: true,
      name: localStorage.getItem("dogName") || "",
    };
    console.log('componente deu Aquele construida')
  }
  componentDidMount() {
    !localStorage.getItem("dogImg") && this.fetchBebe();
    console.log("componente deu aquela montada");
    this.setState({loading: false,})
  }
  keepName = () => {
    const dogImg = this.state.src;
    const dogName = this.state.name;
    localStorage.setItem("dogImg", dogImg);
    localStorage.setItem("dogName", dogName);
  };
  fetchBebe = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.message);
        !data.message.includes("terrier") &&
          this.setState({
            src: data.message,
            loading: false,
          });
      })
      .then(() => {
        alert(this.state.src.split("breeds/")[1].split("/")[0]);
      })
      .catch((error) => console.log(error));
  };
  handleInput = (e) => {
    this.setState({ name: e.target.value });
  };
//  shouldComponentUpdate() {}
  componentDidUpdate() {
    console.log("Rolou aquel update");
  }
  componentWillUMount(){
    this.setState({loading:false})
  }
  render() {
    const { src, loading, name } = this.state;
    return (
      <div className="App">
        <Card
          src={src}
          loading={loading}
          name={name}
          keepName={this.keepName}
          fetchBebe={this.fetchBebe}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
