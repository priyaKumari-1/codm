import React from "react";
import "./CustomButton.css";

const CustomButton = ({
  text,
  icon,              // can be React Icon or inline SVG
  iconPosition = "right", // "left" or "right"
  variant = "filled", // "filled" | "outlined"
  color = "purple",   // custom theme
  className = "",     // allow custom override
  onClick,
}) => {
  return (
    <button
      className={`custom-btn ${variant} ${color} ${className}`}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && (
        <span className="btn-icon">{icon}</span>
      )}
      {text && <span className="btn-text">{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="btn-icon">{icon}</span>
      )}
    </button>
  );
};

export default CustomButton;





// import React from "react";
// import "./CustomButton.css";

// const CustomButton = ({ text, icon: Icon, variant = "filled", color = "purple", onClick }) => {
//   return (
//     <button
//       className={`custom-btn ${variant} ${color}`}
//       onClick={onClick}
//     >
//       {text && <span>{text}</span>}
//       {Icon && <Icon className="btn-icon" />}
//     </button>
//   );
// };

// export default CustomButton;