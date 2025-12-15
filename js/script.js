function showCategory(category, button) {
  // Hide all portfolio sections
  var sections = document.getElementsByClassName("portfolio-category");
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Show selected section
  document.getElementById(category).style.display = "block";

  // Remove active class from all buttons
  var buttons = document.getElementById("portfolio-buttons").getElementsByTagName("button");
  for (var j = 0; j < buttons.length; j++) {
    buttons[i].classList.remove("active");
  }

  // Add active class to clicked button
  button.classList.add("active");
}
