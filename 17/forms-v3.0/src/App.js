import React, { Component } from 'react';
import {Provider, connect} from 'react-redux'

import store from './store'
import './App.css';
import FormErrors from './FormErrors';
import Form from './Form';

class App extends Component {

constructor (props) {
super(props);
this.state = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  hasEntered: false,
  formErrors: {email: '', password: ''},
};
}

render () {
return (
  <Provider store={store}>
  <div>
    <Form></Form>
    <div className="container">
      <FormErrors formErrors={this.state.formErrors} />
    </div>
  </div>
  </Provider>
);
}
}

export default connect()(App);
