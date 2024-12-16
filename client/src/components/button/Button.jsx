import "./button.css";
/* eslint-disable react/prop-types */
const Button = ({ className, content, value, onClick, isActive }) => {
  return (
    <>
      <button
        className={`${className} ${isActive?"onClick":""}`}
        value={value}
        onClick={onClick}
      >
        {content}
        {isActive}
      </button>
    </>
  );
};

export default Button;
