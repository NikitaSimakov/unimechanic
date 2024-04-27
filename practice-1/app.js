import { validateRequiredFields } from "./src/formValidation.js";

const modalBtn = document.querySelector("#modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const cancelBtn = document.getElementById("cancelBtn");
const clearBtn = document.querySelector(".form-group__clear-btn")

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
  const file = document.getElementById("fileInput");
  const site = document.getElementById("site");
  const vk = document.getElementById("vk");
  const ok = document.getElementById("ok");
  const facebook = document.getElementById("facebook");
  const instagram = document.getElementById("instagram");
  const youtube = document.getElementById("youtube");
  const managerName = document.getElementById("managerName");
  const previewImage = document.getElementById("previewImage")

  phone.addEventListener("input", function () {
    let value = phone.value.replace(/\D/g, '');

    if (value[0] === '+') {
      value = value.length > 1 ? value.substring(1) : '';
    } else {
      value = value || /^\+$/.test(phone.value) ? '+' + value : value;
    }

    value = value.replace(/^(\+\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/, function (match, p1, p2, p3, p4, p5) {
      return [p1, p2 && ' ' + p2, p3 && ' ' + p3, p4 && '-' + p4, p5 && '-' + p5].filter(Boolean).join('');
    });

    phone.value = value;
  });


  file.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      previewImage.style.backgroundImage = `url(${e.target.result})`;
    };

    reader.readAsDataURL(file);
  });
  clearBtn.addEventListener('click', function () {
    previewImage.style.backgroundImage = 'url("./icons//preview.png")'
  })
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
      file: file.value,
    });

    form.reset();
  });

});
