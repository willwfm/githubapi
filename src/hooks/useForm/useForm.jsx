import { useState, useEffect } from "react";

const useForm = (initialValues, callback, validate) => {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
  }, [callback, errors, isSubmitting, values]);

  const onSubmitForm = event => {
    event.preventDefault();
    setSubmitting(true);
    setErrors(validate(values));
  };

  const clearCurrentErrors = current => {
    delete errors[current];
    setErrors(errors);
  };

  const handleChange = ({ name, value }) => {
    setSubmitting(false);
    clearCurrentErrors(name);
    setValues(currentValues => ({
      ...currentValues,
      [name]: value
    }));
  };

  return {
    handleChange,
    onSubmitForm,
    values,
    errors,
    setErrors
  };
};

export default useForm;
