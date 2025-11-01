function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return '';
}

function showCookies() {
  const firstname = getCookie('firstname');
  const email = getCookie('email');

  const p = document.createElement('p');
  p.textContent = `Email: ${email} - Firstname: ${firstname}`;
  document.body.appendChild(p);
}