<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/images/logo.jpg" alt="Logo">
      </div>
      <ul class="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="../pages/Apropos.vue">A propos</a></li>
        <li><a href="../pages/Contact.vue">Contact</a></li>
        <li><a href="../pages/Blog.vue">Blog</a></li>
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
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  }
  
  .nav-links a {
    color: #fff;
    text-decoration: none;
  }
  </style>