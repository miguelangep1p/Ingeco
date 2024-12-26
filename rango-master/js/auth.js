// Simulamos una base de datos con un array de usuarios
let users = [
  {
    username: "admin",
    password: "12345"
  }
];

// Guardar y cargar usuarios en LocalStorage para simular persistencia
function loadUsers() {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
}

function saveUsers() {
  localStorage.setItem('users', JSON.stringify(users));
}

// Registro de usuario
if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    loadUsers();

    // Verificar si el usuario ya existe
    if (users.some(user => user.username === username)) {
      alert('El usuario ya existe.');
      return;
    }

    // Agregar el nuevo usuario
    users.push({ username, password });
    saveUsers();

    alert('Registro exitoso.');
    document.getElementById('register-form').reset();
  });
}

// Inicio de sesión
if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    loadUsers();

    // Verificar credenciales
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert('Login exitoso.');
      window.location.href = 'index.html'
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  });
}
