const validatePassword = string => {
  const lowercaseLetters = /[a-z]/g;
  const uppercaseLetters = /[A-Z]/g;
  const numbers = /[0-9]/g;

  if (
      string.match(lowercaseLetters) &&
      string.match(uppercaseLetters) &&
      string.match(numbers)
    ) {
    return true;
  } else {
    return false;
  }
}

module.exports = validatePassword;