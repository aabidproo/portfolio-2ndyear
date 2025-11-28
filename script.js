emailjs.init("wZzzQoQokLJTG8AEG");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = this.querySelector("button");
    const originalText = btn.textContent;
    btn.textContent = "Sending...";
    btn.disabled = true;

    emailjs
      .sendForm("service_ljaynma", "template_q18phuw", this)
      .then(
        () => {
          showMessage(
            "Thank you! Your message has been sent. I'll reply soon.",
            "success"
          );
          this.reset();
        },
        (error) => {
          showMessage(
            "Failed to send. Please try WhatsApp or email directly.",
            "error"
          );
          console.error("EmailJS error:", error);
        }
      )
      .finally(() => {
        btn.textContent = originalText;
        btn.disabled = false;
      });
  });

function showMessage(text, type) {
  const old = document.querySelector(".message");
  if (old) old.remove();

  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  document.getElementById("contact-form").appendChild(div);

  setTimeout(() => div.remove(), 6000);
}

// Toogle section

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Toggle icon between menu and X
  const icon = hamburger.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.replace("ph-list", "ph-x");
  } else {
    icon.classList.replace("ph-x", "ph-list");
  }
});

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.querySelector("i").classList.replace("ph-x", "ph-list");
  });
});
