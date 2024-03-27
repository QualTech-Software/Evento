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
  setEmail,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const handleBlur = () => {
    console.log(email);

    if (validateEmail && typeof validateEmail === "function") {
      if (!validateEmail(email)) {
        setErrorMsg("Invalid email format");
        setEmail("");
      } else {
        setErrorMsg("");
      }
    }

    if (onBlur && typeof onBlur === "function") {
      onBlur(); // Invoke the onBlur function passed from the parent component
    }
  };

  return (
    <div className={className}>
      {/* <LabelInput htmlFor={label} className="inputlabel">
        Email
      </LabelInput> */}
      {errorMsg && <span className="input-error">{errorMsg}</span>}
      <input
        placeholder="John@gmail.com"
        type="text"
        value={email}
        onChange={onChange}
        onFocus={(e) => (e.target.placeholder = "")} // Clear placeholder onFocus
        onBlur={(e) => {
          e.target.placeholder = value ? "" : "John@gmail.com"; // Reset placeholder onBlur if no input
          handleBlur(); // Validate email onBlur
        }}
        onKeyDown={(e) => {
          if (e.keyCode == 8 && errorMsg != "") {
            setErrorMsg("");
          }
        }}
        className={errorMsg ? "text error" : "text"} // Apply 'error' class if errorMsg exists
      />

      {/* Conditional rendering of error message */}
      <div className="input-bottom"></div>
    </div>
  );
};

export default TextBox;
