<template>
  <footer class="footer-container">
    <div class="nav-intern">
      <div class="titleFooter">Liens internes</div>
      <ul class="nav-items">
        <li>
          <RouterLink to="/">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/Apropos">A propos</RouterLink>
        </li>
        <li>
          <RouterLink to="/equipe">L'Equipe</RouterLink>
        </li>
        <li>
          <RouterLink to="/Bog">Nos produits</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact">Contactez nous</RouterLink>
        </li>
        <li>
          <a href="#">Haut de Page</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  // your JavaScript logic here
}
</script>

<style>
  .footer-container {
      background-color: #f2f2f2;
      display: flex;
      align-content: center;
      align-items:flex-start;
      justify-content: space-around;
      color: black;
      padding:20px 30px;
  }
  .nav-items li {

    color: black;

  }

  .nav-items {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: #fff;
  }

  li {
    list-style: none;
  }

  .titleFooter {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>