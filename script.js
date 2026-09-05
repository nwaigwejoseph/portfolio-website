```javascript
// Get the theme button
const themeButton = document.getElementById("themeButton");

// Listen for a click
themeButton.addEventListener("click", function () {

    // Add/remove the dark class
    document.body.classList.toggle("dark");

    // Change the button icon
    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});
```
