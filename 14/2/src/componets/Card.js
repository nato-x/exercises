import React, { Component } from "react";

class Card extends Component {
  render() {
    const { src, loading ,name,  keepName, fetchBebe, handleInput } = this.props;
    return (
      <div>
        <h1>Dogzera</h1>
        <img style={{ width: "400px" }} alt="Catiorro" src={src} />
        {loading && <h2>Loading...</h2>}
        <input value={name} onChange={handleInput} />
        <button type="button" onClick={keepName}>
          Guarde o nome do bebê
        </button>
        <button type="button" onClick={fetchBebe}>
          Outro bebêzinho
        </button>
      </div>
    );
  }
}

export default Card;
