// Get the button
const btn = document.querySelector(".back-to-top");

// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollTop = window.pageYOffset;

  // If the current scroll position is greater than 100px, show the button
  if (scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
});
