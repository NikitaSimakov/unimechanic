import { closeModal, fileCleaner, fileUploader, openModal, phoneNumberMask } from "./src/eventListeners.js";
import { validateRequiredFields } from "./src/formValidation.js";

document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.getElementById("modal-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const clearBtn = document.getElementById("clear-btn");
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

  modalBtn.addEventListener("click", openModal);
  cancelBtn.addEventListener("click", closeModal);
  phone.addEventListener("input", phoneNumberMask);
  file.addEventListener('change', fileUploader);
  clearBtn.addEventListener('click', fileCleaner);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateRequiredFields()) {
      return;
    };

    console.log("Форма отправлена!", {
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
