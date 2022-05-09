import PropTypes from "prop-types";
import { Button } from "./Button";
export default function Header({ title, onAdd, showAdd }) {
  // const onClick = () => {
  //   console.log("click in");
  // };
  return (
    <div className="header">
      <h1>{title} </h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
}

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in Jsx
// const headingStyle = {
//   color: "red",
//   background: "black",
// };
