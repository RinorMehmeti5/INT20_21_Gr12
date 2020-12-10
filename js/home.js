const BUTONA= document.querySelectorAll(".butonat");
const Mini_permbajtesi = document.querySelectorAll(".Minipermbajtes")

BUTONA.forEach(butonat => {
  butonat.addEventListener("click", () =>{
      BUTONA.forEach((butonat) => butonat.classList.remove("active"));
      Mini_permbajtesi.forEach((permbajtja) => permbajtja.classList.remove("active"));
    butonat.classList.add("active");
    document.querySelector(butonat.dataset.target).classList.add("active");
  });
});