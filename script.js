document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-list details');

  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      faqItems.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  const form = document.querySelector('.estimate-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.textContent;
      button.textContent = 'Submitted';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1800);
    });
  }
});
