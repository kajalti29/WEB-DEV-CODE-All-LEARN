// Check if user is logged in when the page loads
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        showNotebookPage();
    } else {
        showLoginPage();
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('notebook-page').style.display = 'none';
}

// Show register page
function showRegisterPage() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'block';
    document.getElementById('notebook-page').style.display = 'none';
}

// Show notebook page
function showNotebookPage() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userData = JSON.parse(localStorage.getItem(loggedInUser));
    document.getElementById('user-name').textContent = loggedInUser;
    document.getElementById('note').value = userData ? userData.note : '';

    document.getElementById('login-page').style.display = 'none';
    document.getElementById('register-page').style.display = 'none';
    document.getElementById('notebook-page').style.display = 'block';
}

// Register new user
function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        const user = { username, password, note: '' };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Registration successful! Please login.');
        showLoginPage();
    } else {
        alert('Please fill out all fields.');
    }
}

// Login user
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', username);
        showNotebookPage();
    } else {
        alert('Invalid username or password.');
    }
}

// Save note
function saveNote() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const note = document.getElementById('note').value;

    if (loggedInUser) {
        const user = JSON.parse(localStorage.getItem(loggedInUser));
        user.note = note;
        localStorage.setItem(loggedInUser, JSON.stringify(user));
    }
}

// Logout user
function logout() {
    localStorage.removeItem('loggedInUser');
    showLoginPage();
}