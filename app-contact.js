// script.js
const form = document.createElement("form");
form.id = "myForm";
form.action = "/submit-data";
form.method = "POST";

const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "userName";
inputName.placeholder = "Name";
form.appendChild(inputName);

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "userEmail";
inputEmail.placeholder = "Email";
form.appendChild(inputEmail);

const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.value = "Submit";
form.appendChild(submitButton);

// document.body.appendChild(form);

// script.js (assuming an existing form with id="myForm")
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
  //   event.preventDefault(); // Prevent default form submission (page reload)

  const formData = new FormData(myForm); // Create FormData object from the form

  fetch(myForm.action, {
    method: myForm.method,
    body: formData,
  })
    .then((response) => response.text()) // Or .json() if expecting JSON
    .then((data) => {
      console.log("Success:", data);
      // Handle successful response (e.g., display a message, clear form)
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle errors
    });
});

// script.js (assuming an existing form with id="myForm")
// const myForm = document.getElementById("myForm");

// You might trigger this from a button click or other event
document
  .getElementById("mySubmitButton")
  .addEventListener("click", function () {
    myForm.submit(); // Submits the form
  });
