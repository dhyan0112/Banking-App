const token = localStorage.getItem('token');

if (!token) {
  alert('Please log in first.');
  window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://bank-server-b6bi.onrender.com/api/account/statement', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();

    if (response.ok) {
      const transactions = data.transactions;
      const table = document.getElementById('transactionTable');

      transactions.forEach((transaction) => {
        const row = table.insertRow();
        row.insertCell(0).textContent = transaction.type;
        row.insertCell(1).textContent = transaction.amount;
        row.insertCell(2).textContent = transaction.timestamp;
        row.insertCell(3).textContent = transaction.balanceAfter;
      });
    } else {
      alert('Error fetching transactions.');
    }
  } catch (error) {
    console.error(error);
  }
});

document.getElementById('logoutButton').addEventListener('click', () => {
  localStorage.removeItem('token');
  alert('Logged out successfully.');
  window.location.href = 'login.html';
});
