let urutan = 1;
let toggleModal = false;

function gantiGambar() {
  urutan++;
  let nextKomponen = document.querySelector(`[carousel-item="${urutan}"]`);
  let currentKomponen = document.querySelector(
    `[carousel-item="${urutan - 1}"]`
  );
  let firstKomponen = document.querySelector(`[carousel-item="1"]`);
  if (nextKomponen !== null) {
    nextKomponen.classList.remove("translate-x-full");
    nextKomponen.addEventListener("transitionend", function handler() {
      currentKomponen.classList.add("translate-x-full");
      nextKomponen.removeEventListener("transitionend", handler);
    });
  } else {
    firstKomponen.classList.remove("translate-x-full");
    firstKomponen.addEventListener("transitionend", function handler() {
      currentKomponen.classList.add("translate-x-full");
      firstKomponen.removeEventListener("transitionend", handler);
    });
    urutan = 1;
  }
}

function togglePopUp(){
  toggleModal = !toggleModal;
  if (toggleModal == true) {
    document.getElementById("progress-modal").classList.remove("hidden");
  }else{
    document.getElementById("progress-modal").classList.add("hidden");
  }
}

function klikGambar(gambar){
  togglePopUp();
  let gambarPopup = gambar.src;
  document.getElementById("modal-image").src = gambarPopup
}

gantiGambar();
setInterval(() => gantiGambar(), 5000);