function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}; path=/`;

  hideForm();
  showWelcomeMessageFromCookies();
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, value] = cookie.trim().split('=');
    if (key === name) return value;
  }
  return '';
}

function showForm() {
  const form = document.getElementById('login-form');
  form.style.display = 'block';

  const welcome = document.getElementById('welcome');
  if (welcome) welcome.remove();
}

function hideForm() {
  const form = document.getElementById('login-form');
  form.style.display = 'none';
}

function deleteCookiesAndShowForm() {
  document.cookie = "firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  showForm();
}

function showWelcomeMessageFromCookies() {
  const firstname = getCookie('firstname');
  const email = getCookie('email');

  if (!firstname || !email) {
    showForm();
    return;
  }

  hideForm();

  const h1 = document.createElement('h1');
  h1.id = 'welcome';
  h1.innerHTML = `Welcome ${firstname} <a href="#" onclick="deleteCookiesAndShowForm()">(logout)</a>`;
  document.body.appendChild(h1);
}