document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;
  
    try {
      const response = await fetch('https://bank-server-b6bi.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, pin }),
      });
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert('Login Successful!');
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('error').textContent = data.message || 'Login failed.';
      }
    } catch (error) {
      console.error(error);
    }
  });
  