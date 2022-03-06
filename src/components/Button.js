import PropTypes from "prop-types";
export const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn" style={{ background: color }}>
        {text}
      </button>
    </div>
  );
};
Button.defaultProps = {
  color: "steelBlue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
