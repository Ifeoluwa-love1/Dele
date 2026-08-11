const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.textContent = isOpen ? "Close" : "Menu";
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");

    if (navToggle) {
      navToggle.textContent = "Menu";
    }
  });
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  function toggleError(fieldId, condition) {
    const field = document.getElementById(fieldId);
    field.classList.toggle("error", condition);
    if (condition) valid = false;
  }

  toggleError("field-name", name.value.trim().length === 0);
  toggleError("field-phone", !/^[0-9+ ]{7,15}$/.test(phone.value.trim()));
  toggleError("field-message", message.value.trim().length === 0);

  if (valid) { form.reset(); }
});