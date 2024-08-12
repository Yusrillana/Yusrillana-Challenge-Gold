// Logika validasi login
let users = []; 

// Fungsi untuk validasi login
function validateLogin(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user !== undefined;
}

// Fungsi untuk menangani form login
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password 
 = document.getElementById('password').value;

    if   
 (validateLogin(email, password)) {
        // Login berhasil, redirect ke dashboard
        window.location.href = 'dashboard.html'; 
    } else {
        alert('Email atau password salah!');
    }
});

// Fungsi untuk menangani form pembuatan akun
document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    // ... ambil data dari formulir (nama, tanggal lahir, email, password)
    // ... validasi data
    // ... jika valid, simpan data ke users dan redirect ke dashboard
});

// Toggle tampilan form login dan signup
const createAccountLink = document.getElementById('create-account-link');
const loginSection = document.querySelector('.login-section');
const signupSection = document.querySelector('.signup-section');

createAccountLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginSection.style.display = 'none';
    signupSection.style.display = 'block';
});


// ... (logika lainnya sesuai fitur aplikasi)

// Gunakan financial-utils.js
import { isBudgetBalanced } from './utils/financial-utils.js';
// ...