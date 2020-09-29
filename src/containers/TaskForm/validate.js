const validate = (values) => {
  const errors = {};
  const { title } = values;
  if (!title) {
    errors.title = 'Please enter title';
  } else if (title.trim().length < 5) {
    errors.title = 'Title must have at least 5 characters';
  }
  return errors;
};

export default validate;
