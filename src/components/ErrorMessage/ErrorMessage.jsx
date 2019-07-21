import React from "react";
import PropTypes from "prop-types";

import { Text } from "components";

const ErrorMessage = ({ error }) => (
  <Text size="12" color="var(--color-red)" text={error} />
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired
};

export default ErrorMessage;
