//your JS code here. If required.
// script.js
// script.js
document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.toggle');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checked = document.querySelectorAll('.toggle:checked');
      if (checked.length > 2) {
        this.checked = false;
      }
    });

    // Toggle color on click
    const span = checkbox.nextElementSibling;
    span.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change'));
    });
  });
});
