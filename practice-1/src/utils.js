function isEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
};

function isPhoneValid(phone) {
  const phoneRegex = /^(\+\d{1})\s(\d{3})\s(\d{3})-(\d{2})-(\d{2})$/;
  return phoneRegex.test(phone);
};

export { isEmail, isPhoneValid };
