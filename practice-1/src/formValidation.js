import { isEmail, isPhoneValid } from "./utils.js";

function validateRequiredFields() {
  let isValid = true;

  if (orgName.value.trim() === "") {
    isValid = false;
    setErrorFor(orgName, "Пожалуйста, введите название организации");
  } else if (orgName.value.trim().length < 3) {
    isValid = false;
    setErrorFor(orgName, "Название организации должно содержать не менее 3 символов");
  } else {
    setSuccessFor(orgName);
  }

  if (phone.value.trim() === "") {
    isValid = false;
    setErrorFor(phone, "Пожалуйста, введите номер телефона");
  } else if (!isPhoneValid(phone.value.trim())) {
    isValid = false;
    setErrorFor(phone, "Пожалуйста, введите корректный номер телефона в формате +7 999 999-99-99");
  } else {
    setSuccessFor(phone);
  }

  if (email.value.trim() === "") {
    isValid = false;
    setErrorFor(email, "Пожалуйста, введите адрес электронной почты");
  } else if (!isEmail(email.value.trim())) {
    isValid = false;
    setErrorFor(email, "Пожалуйста, введите корректный адрес электронной почты");
  } else {
    setSuccessFor(email);
  }

  if (direction.value === "") {
    isValid = false;
    setErrorFor(direction, "Пожалуйста, выберите направление");
  } else {
    setSuccessFor(direction);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMsg = formControl.querySelector(".error-message");
  input.classList.add("error");
  errorMsg.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  const errorMsg = formControl.querySelector(".error-message");
  errorMsg.innerText = "";
  input.classList.remove("error");
  errorMsg.innerText = "";
}

export { validateRequiredFields, setErrorFor, setSuccessFor };
