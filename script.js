document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Dummy authentication logic (replace with real API call or backend logic)
  if (username === 'admin' && password === 'admin123') {
    alert('Login successful');
    window.location.href = 'dashboard.html'; // Redirect after login (optional)
  } else {
    errorMsg.textContent = 'Invalid username or password';
    errorMsg.style.display = 'block';
  }
});
