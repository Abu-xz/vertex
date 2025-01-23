const modal = document.getElementById("modal");
const closeButton = document.getElementById("closeModal");
const cardButton = document.querySelectorAll('.card-button');

const contactForm = document.getElementById("registerForm");
const studentName = document.getElementById("student-name").value;
const studentMobile = document.getElementById("student-mobile").value;
const parentMobile = document.getElementById("parent-mobile").value;
const submitButton = document.getElementById("submit-button").value;
const syllabusSelect = document.getElementById("syllabus-select");
const classSelect = document.getElementById("class-select");
const email = document.getElementById("email").value;

// Show modal when window load
// window.onload = function () {
//   modal.style.display = "flex";
// };



// Card button event listener
cardButton.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
})

// close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Form validation
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const studentName = document.getElementById("student-name").value.trim();
  const studentMobile = document.getElementById("student-mobile").value.trim();
  const parentMobile = document.getElementById("parent-mobile").value.trim();
  const email = document.getElementById("email").value.trim();
  const classSelected = document.getElementById("class-select").value;
  const syllabusSelect = document.getElementById("syllabus-select").value;

  // Clear all previous error messages
  const errorFields = document.querySelectorAll(".error-message");
  errorFields.forEach((field) => (field.textContent = ""));

  // Validation flags
  let isValid = true;

  // Validate student name (letters and spaces only)
  const namePattern = /^[a-zA-Z\s]+$/;
  if (!studentName || !namePattern.test(studentName)) {
    document.getElementById("student-name-error").textContent =
      "Please enter a valid student name (letters and spaces only).";
    isValid = false;
  }

  // Validate student mobile (10 digits)
  const mobilePattern = /^[0-9]{10}$/;
  if (!studentMobile || !mobilePattern.test(studentMobile)) {
    document.getElementById("student-mobile-error").textContent =
      "Please enter a valid 10-digit student mobile number.";
    isValid = false;
  }

  // Validate parent mobile (10 digits)
  if (!parentMobile || !mobilePattern.test(parentMobile)) {
    document.getElementById("parent-mobile-error").textContent =
      "Please enter a valid 10-digit parent mobile number.";
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!email || !emailPattern.test(email)) {
    document.getElementById("email-error").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate class selection
  if (!classSelected) {
    document.getElementById("class-select-error").textContent =
      "Please select a class.";
    isValid = false;
  }

  // Validate syllabus selection
  if (!syllabusSelect) {
    document.getElementById("syllabus-select-error").textContent =
      "Please select a syllabus.";
    isValid = false;
  }
  console.log(classSelect);

  // If all validations pass
  if (isValid) {

    const data = {
      student_mobile: studentMobile,
      parent_mobile: parentMobile,
      email: email,
      class: classSelect,
      syllabus: syllabusSelect,
    };

  }
});
