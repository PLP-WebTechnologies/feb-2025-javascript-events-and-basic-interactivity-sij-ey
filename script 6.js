// Button Click
let clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function() {
  alert("Button was clicked!");
});

// Hover Event (just for demo, CSS handles color)
let hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", function() {
  hoverDiv.style.backgroundColor = "lightblue";
});
hoverDiv.addEventListener("mouseout", function() {
  hoverDiv.style.backgroundColor = "lightgray";
});

// Keypress
let textInput = document.getElementById("textInput");
textInput.addEventListener("keypress", function(event) {
  console.log("You typed: " + event.key);
});

// Image Gallery
let galleryImage = document.getElementById("galleryImage");
let nextImageBtn = document.getElementById("nextImageBtn");
let imageList = [
  "https://picsum.photos/id/1015/150/150",
  "https://picsum.photos/id/1025/150/150",
  "https://picsum.photos/id/1035/150/150"
];
let imageIndex = 0;

nextImageBtn.addEventListener("click", function() {
  imageIndex = (imageIndex + 1) % imageList.length;
  galleryImage.src = imageList[imageIndex];
});

// Accordion Toggle
let accordionBtn = document.getElementById("accordionBtn");
let accordionContent = document.getElementById("accordionContent");

accordionBtn.addEventListener("click", function() {
  if (accordionContent.style.display === "none") {
    accordionContent.style.display = "block";
  } else {
    accordionContent.style.display = "none";
  }
});

// Form Validation
let myForm = document.getElementById("myForm");
let formMessage = document.getElementById("formMessage");

myForm.addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  if (!email.includes("@")) {
    formMessage.textContent = "Email is not valid.";
    return;
  }

  if (password.length < 8) {
    formMessage.textContent = "Password must be at least 8 characters.";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
});
