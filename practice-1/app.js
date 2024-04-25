const modalBtn = document.querySelector("#modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const cancelBtn = document.getElementById("cancelBtn");

modalBtn.addEventListener("click", function () {
  modalOverlay.classList.add("active");
});

cancelBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("partnerForm");

  const orgName = document.getElementById("orgName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const direction = document.getElementById("direction");
  const site = document.getElementById("site");
  const vk = document.getElementById("vk");
  const ok = document.getElementById("ok");
  const facebook = document.getElementById("facebook");
  const instagram = document.getElementById("instagram");
  const youtube = document.getElementById("youtube");
  const managerName = document.getElementById("managerName");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateRequiredFields()) {
      return;
    }

    console.log("Форма отправлена!");
    console.log({
      orgName: orgName.value,
      phone: phone.value,
      email: email.value,
      direction: direction.value,
      site: site.value,
      vk: vk.value,
      ok: ok.value,
      facebook: facebook.value,
      instagram: instagram.value,
      youtube: youtube.value,
      managerName: managerName.value,
    });

    form.reset();
  });

  cancelBtn.addEventListener("click", function (event) {
    event.preventDefault();
    form.reset();
  });

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
      setErrorFor(phone, "Пожалуйста, введите корректный номер телефона в формате +7(999)999-99-99");
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
  }

  function isEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function isPhoneValid(phone) {
    const phoneRegex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
  }
});
