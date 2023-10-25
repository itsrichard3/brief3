const btnEnvoyer = document.querySelector(".btn-envoyer");
const fullNameInput = document.getElementById("fullname");
const teleInput = document.getElementById("tele");
const emailInput = document.getElementById("email");
const cinInput = document.getElementById("cin");

const errorSpan = document.querySelector(".error");

const teleRegex = /^\d{10}$/; // Example: 1234567890 (10 digits)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const cinRegex = /^[A-Za-z0-9]{8}$/; // Example: AB123456 (1 or 2 letters followed by 6 digits)

btnEnvoyer.addEventListener("click", function (event) {
  event.preventDefault();
  errorSpan.style.display = "none"; // Reset the error message

  if (!fullNameInput.value.includes(" ")) {
    errorSpan.textContent = "Please enter your full name.";
    errorSpan.style.display = "block";
    // Prevent form submission
  } else if (!teleRegex.test(teleInput.value)) {
    errorSpan.textContent = "Invalid phone number.";
    errorSpan.style.display = "block";
  } else if (!emailRegex.test(emailInput.value)) {
    errorSpan.textContent = "Invalid email address.";
    errorSpan.style.display = "block";
  } else if (!cinRegex.test(cinInput.value)) {
    errorSpan.textContent = "Invalid CIN number.";
    errorSpan.style.display = "block";
  }
});
