const form = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("hidden");
    form.submit();
  }, 2000);
});
