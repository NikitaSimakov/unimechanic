function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function isPhoneValid(phone) {
  const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
}

export { isEmail, isPhoneValid };
