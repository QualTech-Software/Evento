export const validatePass = (password, setPasswordError) => {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
  if (!password.match(passwordRegex)) {
    setPasswordError(
      "Password must have at least 8 characters including at least 1 lowercase, 1 uppercase, 1 digit, and 1 special symbol"
    );
  } else {
    setPasswordError("");
  }
};

export const validateCpass = (password, cpassword, setCpasswordError) => {
  if (password !== cpassword) {
    setCpasswordError("Passwords do not match");
  } else {
    setCpasswordError("");
  }
};

export const validateCon = (phoneNumber, setErrorPhoneMsg) => {
  if (phoneNumber.length !== 10) {
    setErrorPhoneMsg("Mobile number must be 10 digits");
  } else {
    setErrorPhoneMsg("");
  }
};

export const validateFullName = (name, setFullNameError) => {
  const names = name.split(" ");
  if (names.length < 2) {
    setFullNameError("Please enter both first name and last name");
  } else {
    setFullNameError("");
  }
};
