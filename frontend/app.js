// const apiUrl = 'https://bank-server-b6bi.onrender.com'; // Backend URL

// async function login() {
//   const username = document.getElementById('username').value;
//   const pin = document.getElementById('pin').value;

//   const response = await fetch(`${apiUrl}/auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, pin }),
//   });

//   if (!response.ok) {
//     alert('Invalid username or PIN');
//     return;
//   }

//   const data = await response.json();
//   localStorage.setItem('token', data.token);
//   showDashboard();
// }

// async function showDashboard() {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return alert('Please login first');
//   }

//   const response = await fetch(`${apiUrl}/account/dashboard`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     return alert('Error fetching dashboard data');
//   }

//   const data = await response.json();
//   document.getElementById('user-name').textContent = data.user.username;
//   document.getElementById('balance').textContent = data.user.balance;

//   let transactionHtml = '';
//   data.transactions.forEach(transaction => {
//     transactionHtml += `<div>
//       <p>Type: ${transaction.type}</p>
//       <p>Amount: $${transaction.amount}</p>
//       <p>Balance After: $${transaction.balanceAfter}</p>
//     </div>`;
//   });
//   document.getElementById('transaction-history').innerHTML = transactionHtml;

//   document.getElementById('login-form').style.display = 'none';
//   document.getElementById('dashboard').style.display = 'block';
// }

// async function logout() {
//   localStorage.removeItem('token');
//   document.getElementById('login-form').style.display = 'block';
//   document.getElementById('dashboard').style.display = 'none';
// }

// async function deposit() {
//   const amount = prompt('Enter deposit amount:');
//   if (!amount || amount <= 0) {
//     return alert('Invalid amount');
//   }

//   const response = await fetch(`${apiUrl}/account/deposit`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}`,
//     },
//     body: JSON.stringify({ amount }),
//   });

//   if (!response.ok) {
//     return alert('Deposit failed');
//   }

//   showDashboard();
// }

// async function transfer() {
//   const recipientUsername = prompt('Enter recipient username:');
//   const amount = prompt('Enter transfer amount:');

//   if (!recipientUsername || !amount || amount <= 0) {
//     return alert('Invalid input');
//   }

//   const response = await fetch(`${apiUrl}/account/transfer`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem('token')}`,
//     },
//     body: JSON.stringify({ recipientUsername, amount }),
//   });

//   if (!response.ok) {
//     return alert('Transfer failed');
//   }

//   showDashboard();
// }
