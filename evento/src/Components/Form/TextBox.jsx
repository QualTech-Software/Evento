import React, { useState } from "react";
import "../Account/Create.css";
import { LabelInput } from "../../modules/create/components/atoms";

const TextBox = ({
  label,
  value,
  onChange,
  onBlur,
  className,
  email,
  validateEmail,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleBlur = () => {
    if (validateEmail && typeof validateEmail === "function") {
      const isValid = validateEmail(value); // Validate the current value
      setErrorMsg(isValid ? "" : "Invalid email format");
    }

    if (onBlur && typeof onBlur === "function") {
      onBlur(); // Invoke the onBlur function passed from the parent component
    }
  };

  return (
    <div className={className}>
      <LabelInput htmlFor={label} className="inputlabel">
        Email
      </LabelInput>
      <span>{errorMsg}</span>
      <input
        placeholder="Ketan@gmail.com"
        type="text"
        value={errorMsg ? errorMsg : email}
        // onChange={onChange}
        onFocus={(e) => (e.target.placeholder = "")} // Clear placeholder onFocus
        onBlur={(e) => {
          e.target.placeholder = value ? "" : "Ketan@gmail.com"; // Reset placeholder onBlur if no input
          handleBlur(); // Validate email onBlur
        }}
        className={errorMsg ? "text error" : "text"} // Apply 'error' class if errorMsg exists
      />

      {/* Conditional rendering of error message */}
      <div className="input-bottom"></div>
    </div>
  );
};

export default TextBox;
