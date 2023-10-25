






document.querySelectorAll('.accordion-item').forEach((accordion) => {
  accordion.addEventListener('toggle', function () {
    if (this.open) {
      document.querySelectorAll('.accordion-item').forEach((otherAccordion) => {
        if (otherAccordion !== this) otherAccordion.removeAttribute('open');
      });
    }
  });
});