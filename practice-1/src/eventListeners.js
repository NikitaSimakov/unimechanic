function openModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.add("active");
};

function closeModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("active");
};

function fileUploader(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const previewImage = document.getElementById("previewImage");
    previewImage.style.backgroundImage = `url(${e.target.result})`;
  };

  reader.readAsDataURL(file);
};

function fileCleaner() {
  previewImage.style.backgroundImage = 'url("./icons//preview.png")';
};

function phoneNumberMask(e) {
  let value = e.target.value.replace(/\D/g, '');

  if (value[0] === '+') {
    value = value.length > 1 ? value.substring(1) : '';
  } else {
    value = value || /^\+$/.test(phone.value) ? '+' + value : value;
  }

  value = value.replace(/^(\+\d{1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/, function (match, p1, p2, p3, p4, p5) {
    return [p1, p2 && ' ' + p2, p3 && ' ' + p3, p4 && '-' + p4, p5 && '-' + p5].filter(Boolean).join('');
  });

  phone.value = value;
};

export { openModal, closeModal, fileUploader, fileCleaner, phoneNumberMask };