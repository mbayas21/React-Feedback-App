import PropTypes from "prop-types";

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "UI Feedback",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.PropType = {
  text: PropTypes.string.isRequired,
};

export default Header;
