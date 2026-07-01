// ============================================
// MENDOZA HEATING & AIR — Contact form handling
// Frontend-only demo: no backend, shows a success message on submit.
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMsg = document.getElementById('formSuccess');
  const nameField = document.getElementById('fullName');
  const phoneField = document.getElementById('phone');
  const nameFieldWrap = nameField.closest('.field');
  const phoneFieldWrap = phoneField.closest('.field');

  function setError(fieldWrap, hasError) {
    fieldWrap.classList.toggle('has-error', hasError);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValid = nameField.value.trim().length > 0;
    const phoneValid = phoneField.value.trim().length > 0;

    setError(nameFieldWrap, !nameValid);
    setError(phoneFieldWrap, !phoneValid);

    if (!nameValid || !phoneValid) {
      successMsg.classList.remove('is-visible');
      const firstInvalid = !nameValid ? nameField : phoneField;
      firstInvalid.focus();
      return;
    }

    successMsg.classList.add('is-visible');
    form.reset();
  });

  [nameField, phoneField].forEach((field) => {
    field.addEventListener('input', () => {
      if (field.value.trim().length > 0) {
        setError(field.closest('.field'), false);
      }
    });
  });
});
