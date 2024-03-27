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

export const handleInputChange = (e, setState) => {
  const { value } = e.target;
  setState(value);
};

export const clearPlaceholderOnFocus = (e) => {
  e.target.placeholder = "";
};

export function handleBackspaceKeyDown(e, error, setError) {
  if (e.keyCode === 8 && error !== "") {
    setError(""); // Clear the error message
  }
}
