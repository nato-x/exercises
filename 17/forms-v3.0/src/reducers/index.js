import { SUBMIT_ACTION } from "../actions";
const INITIAL_STATE = {
  form: {
    name: "",
    email: "",
    cpf: "",
    address: "",
    city: "",
    countryState: "",
    addressType: "",
    resume: "",
    role: "",
    roleDescription: "",
    hasEntered: false,
    formErrors: { email: "", password: "" },
  },
};

export const submitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_ACTION:
      return Object.assign({}, { ...state }, action.form)
    default:
      return state;
  }
};
