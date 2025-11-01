function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10); // 10 gün əlavə et

  document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;
}

function showCookies() {
  const p = document.createElement('p');
  p.textContent = `Cookies: ${document.cookie}`;
  document.body.appendChild(p);
}