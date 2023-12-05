const validateEmail = ({ email, setEmailError }) => {
  // 👇 This is the validation of a email using regular expressions.
  const emailRegular =
    "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";

  return email && !email.match(emailRegular)
    ? setEmailError("Email is not valid")
    : setEmailError("");
};

const validatePhone = ({ phone, setPhoneError }) => {
  // 👇 This is the validation of a phone number using regular expressions.
  const phoneRegular = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;

  return phone && !phone.match(phoneRegular)
    ? setPhoneError("phone number is not valid")
    : setPhoneError("");
};

const validateFullName = ({ fullName, setFullNameError }) => {
  return fullName && fullName.length < 5
    ? setFullNameError("Full name is too short")
    : fullName && fullName.length > 50
    ? setFullNameError("Try to make short and meanfull")
    : setFullNameError("");
};

const validateMessage = ({ message, setMessageError }) => {
  return message && message.length < 5
    ? setMessageError("Message is too short")
    : message && message.length > 150
    ? setMessageError("Try to make short and meanfull")
    : setMessageError("");
};

export { validateEmail, validatePhone, validateFullName, validateMessage };
