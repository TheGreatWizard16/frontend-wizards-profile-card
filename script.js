(() => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  const imgEl = document.querySelector('[data-testid="test-user-avatar"]');
  const urlInput = document.querySelector('#avatarUrl');
  const fileInput = document.querySelector('#avatarFile');
  let objectUrl;

  // 1) Time in ms — keep reasonably fresh
  const setTime = () => { timeEl.textContent = String(Date.now()); };
  setTime();
  const timer = setInterval(setTime, 125); // ~8fps keeps delta tight without burning CPU
  window.addEventListener('beforeunload', () => clearInterval(timer));

  // 2) Avatar via URL
  urlInput.addEventListener('change', () => {
    const val = urlInput.value.trim();
    if (!val) return;
    imgEl.src = val;
  });

  // 3) Avatar via file — use object URL so the <img> ultimately displays a URL
  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    objectUrl = URL.createObjectURL(file);
    imgEl.src = objectUrl;
  });

  // Robust alt if the image fails
  imgEl.addEventListener('error', () => {
    imgEl.alt = 'Avatar failed to load';
  });
})();
