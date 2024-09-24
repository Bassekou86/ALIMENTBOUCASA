<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/images/logo.jpg" alt="Logo">
      </div>
      <ul class="nav-links">
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/Apropos">A propos</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact">Contact</RouterLink>
        </li>
        <li>
          <RouterLink to="/Blog">Nos produits</RouterLink>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar"
  }
  </script>
  
  <style scoped>
.navbar {
  background-color: #f9f9f9; /* new background color */
  padding: 1rem;
  display: flex;
  justify-content:space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
  
  .logo {
    margin-right: 20px;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
  }
  
  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-links li {
    margin-right: 20px;
    margin-left: auto;
  }
  
  .nav-links a {
    color: #100f0f;
    text-decoration: none;
  }
  </style>