import React, { useState } from "react";
import "../Account/Create.css";

const TextBox = ({
  label,
  value,
  onChange,
  onBlur,
  className,
  email,
  validateEmail,
}) => {
  const [ErrorMsg, setErrorMsg] = useState("");

  const handleBlur = (e) => {
    if (validateEmail && typeof validateEmail == "function") {
      console.log("inside this");
      const isValid = validateEmail(e.target.value);
      setErrorMsg("");
      if (!isValid) {
        console.log("inside this sgtep 1 ");
        setErrorMsg("Invalid email format");
      }
    }
    if (onBlur && typeof onBlur == "function") {
      onBlur();
    }
  };

  return (
    <div className={className}>
      <label htmlFor={label} className="inputlabel">
        {ErrorMsg != "" ? (
          <span className="error" style={{ color: "red" }}>
            {ErrorMsg}{" "}
          </span>
        ) : (
          <span>{label}</span>
        )}
      </label>
      <input
        type="text"
        id={label}
        value={email}
        onChange={onChange}
        onBlur={handleBlur} // Use handleBlur instead of onBlur directly
        className="text"
      />
      <div className="input-bottom"></div>
    </div>
  );
};

export default TextBox;
