import React from "react";
import PropTypes from "prop-types";

class Star extends React.PureComponent {
  render() {
    const { color, size } = this.props;
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={color} />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    );
  }
}

Star.defaultProps = {
  color: "#FFFFFF",
  size: 64
};

Star.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export { Star };
