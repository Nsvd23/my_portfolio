// 1. Find the button
const themeButton = document.getElementById("theme-toggle");
// 2. Wait for a click
themeButton.addEventListener("click", function() {
    // 3. Change the page
    document.body.classList.toggle("dark-mode");
});