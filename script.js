// script.js
document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('.toggle');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checked = document.querySelectorAll('.toggle:checked');
      if (checked.length > 2) {
        // Uncheck the last checked checkbox
        checked[0].checked = false;
      }
    });

    // Toggle color on click
    const span = checkbox.nextElementSibling;
    span.addEventListener('click', (event) => {
      event.preventDefault();
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change'));
    });
  });
});
