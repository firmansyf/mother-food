const Validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username !== "yusuf") {
    errors.username = "Wrong username";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password !== "firmansyah") {
    errors.password = "Wrong password";
  }

  return errors;
};

export { Validation };
