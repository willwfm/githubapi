const validateUsername = ({ username }) => {
  const errors = {};

  const re = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/g;

  if (!username.match(re)) {
    errors.username = "Username inválido";
  }

  return errors;
};

export { validateUsername };
