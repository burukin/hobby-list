import React from "react";
import { Field, reduxForm } from "redux-form";

const validate = values => {
  const errors = {};
  if (!values.hobbyName) {
    errors.hobbyName = "Required";
  } else if (
    values.hobbyName.length > 50 &&
    !/\w{1,50}/i.test(values.hobbyName)
  ) {
    errors.hobbyName =
      "Must be under 50 symbols and contain only latin letters and digits";
  }
  if (!values.description) {
    errors.description = "Required";
  } else if (!/\w{1,100}/i.test(values.description)) {
    errors.description = "Must contain only latin letters and digits";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className='Hobby-form__row'>
    <label className="Hobby-form__label">{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className='Hobby-form__input'
      />
      {touched &&
        ((error && <span className="Hobby-form__error">{error}</span>) ||
          (warning && <span className="Hobby-form__warning">{warning}</span>))}
    </div>
  </div>
);

const CreateHobbyForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className='Hobby-form'>
      <Field
        name='hobbyName'
        type='text'
        component={renderField}
        label='HobbyName'
      />
      <Field
        name='description'
        type='textarea'
        component={renderField}
        label='Description'
      />
      <div>
        <button type='submit' disabled={submitting} className='btn'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "CreateHobbyForm",
  validate
})(CreateHobbyForm);
