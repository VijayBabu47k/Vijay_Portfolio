function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  emailjs.sendForm("service_yiwkxre", "template_pnpr1tb", this)
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("✅ Email sent successfully!");
      form.reset(); // ✅ Clear the form after successful submission
    }, function (error) {
      console.error("FAILED...", error);
      alert("❌ Failed to send email. Check console for details.");
    });
});