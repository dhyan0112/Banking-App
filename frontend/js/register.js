document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const pin = document.getElementById('pin').value;
    const deposit = document.getElementById('deposit').value || 0;
  
    try {
      const response = await fetch('https://bank-server-b6bi.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, pin, initialDeposit: deposit }),
      });
      const data = await response.json();
  
      if (response.ok) {
        alert('Registration Successful! Please log in.');
        window.location.href = 'login.html';
      } else {
        document.getElementById('error').textContent = data.message || 'Error during registration.';
      }
    } catch (error) {
      console.error(error);
    }
  });
  