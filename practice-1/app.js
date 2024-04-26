import { validateRequiredFields } from "./src/formValidation.js";

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
  const file = document.getElementById("fileInput");
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
      file: file.value,
    });

    form.reset();
  });

});
