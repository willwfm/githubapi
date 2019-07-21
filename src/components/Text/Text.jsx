/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

const greys = {
  primary: "#494c4d",
  secondary: "#8d9496"
};

const Text = ({ bold, size, text, color, secondary }) => (
  <span
    css={css`
      color: ${color ? color : secondary ? greys.secondary : greys.primary};
      margin: 0;
      min-height: 20px;
      font-size: ${size}px;
      font-weight: ${bold ? "bold" : "normal"};
      font-style: normal;
      font-stretch: normal;
      line-height: 1.43;
      letter-spacing: normal;
    `}
  >
    {text}
  </span>
);

Text.propTypes = {
  bold: PropTypes.bool,
  secondary: PropTypes.bool
};

Text.defaultProps = {
  size: 12
};

export default Text;
