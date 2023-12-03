document.addEventListener("DOMContentLoaded", function () {
  const programInput = document.getElementById("program");
  const yearInput = document.getElementById("year");
  const nameInput = document.getElementById("name");
  const studentNumberInput = document.getElementById("studentNumber");

  const programOutput = document.getElementById("programOutput");
  const yearOutput = document.getElementById("yearOutput");
  const nameOutput = document.getElementById("nameOutput");
  const studentNumberOutput = document.getElementById("studentNumberOutput");
  const photoInput = document.getElementById("photo");
  const placeholderImage = document.getElementById("placeholder");

  programInput.addEventListener("input", updateCard);
  yearInput.addEventListener("input", updateCard);
  nameInput.addEventListener("input", updateCard);
  studentNumberInput.addEventListener("input", updateCard);
  photoInput.addEventListener("change", updatePhoto);

  document
    .querySelector(".custom-button")
    .addEventListener("click", function () {
      document.getElementById("photo").click();
    });

  function updateCard() {
    programOutput.innerText = programInput.value;
    yearOutput.innerText = "Year of Entry: " + yearInput.value;
    nameOutput.innerText = "Name: " + nameInput.value;
    studentNumberOutput.innerText =
      "Student Number: " + studentNumberInput.value;
  }

  function updatePhoto() {
    const fileInput = document.getElementById("photo");
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Update the src attribute of the placeholder image
        placeholderImage.src = e.target.result;
      };

      // Read the selected file as a data URL
      reader.readAsDataURL(selectedFile);
    }
  }
});
