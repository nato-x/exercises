export const SUBMIT_ACTION = "SUBMIT_ACTION";

export const submitForms = (
form
) => {
  return {
    type: SUBMIT_ACTION,
    form
  };
};
