import React, { Component } from 'react'
import {connect} from 'react-redux'
import { submitReducer } from './reducers'
import { submitForms } from './actions';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

class Form extends Component {

  validateField(fieldName, value) {

    switch(fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    
    return '';
    }

  handleSubmit = event => {
    event.preventDefault();
    }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  onBlurHandler = event => {
    let { name, value } = event.target;
    
    if(name === 'city') value = value.match(/^\d/) ? '' : value
    
    this.updateState(name, value)
    }
    
  changeHandler = event => {
    let { name, value } = event.target;
    
    if(name === 'name') value = value.toUpperCase()
    
    if(name === 'address') value = this.validateAddress(value)
    
    this.updateState(name, value)
    }
    updateState(name, value) {
      this.props.form[name] = value
      }
  render() {
    return (
      <form>
      <fieldset>
        <legend>Dados pessoais</legend>
        <div className="container">
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            required
            value={this.props.name}
            onChange={this.changeHandler}
          />
        </div>
        <div className="container">
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            value={this.props.email}
            onChange={this.changeHandler}
          />
        </div>
        <div className="container">
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            value={this.props.cpf}
            onChange={this.changeHandler}
          />
        </div>
        <div className="container">
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            required
            value={this.props.address}
            onChange={this.changeHandler}
          />
        </div>
        <div className="container">
          Cidade:
          <input
            type="text"
            name="city"
            maxLength="28"
            required
            value={this.props.city}
            onBlur={this.onBlurHandler}
            onChange={this.changeHandler}
          />
        </div>
        <div className="container">
          Estado:
          <select
            name="countryState"
            required
            value={this.props.countryState}
            onChange={this.changeHandler}
          >
              {states.map((value, key) =>
                <option key={key}>{value}</option>
                )
              }
          </select>
        </div>
      </fieldset>
      <fieldset>
        <legend>Dados profissionais:</legend>
          <div className="container">
            Resumo do currículo:
            <textarea
              name="resume"
              maxLength="1000"
              required
              value={this.props.resume}
              onChange={this.changeHandler}
            />
          </div>
          <div className="container">
            Cargo:
            <input
              type="text"
              name="role"
              maxLength="40"
              required
              value={this.props.role}
              onChange={this.changeHandler}
              onMouseEnter={() => {
                alert('Preencha com cuidado esta informação.');
              }}
            />
          </div>
          <div className="container">
            Descrição do cargo:
            <textarea
              name="roleDescription"
              maxLength="500"
              value={this.props.roleDescription}
              onChange={this.changeHandler}
            />
          </div>
        </fieldset>
        <button onClick={this.props.handleSubmit}></button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  form: (form) => dispatch(submitForms(form))
}
export default connect(null, mapDispatchToProps)(Form)