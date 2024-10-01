<template>
  <nav class="navbar">
    <!-- Logo and hamburger menu -->
    <div class="nav-brand">
      <a href="#" class="nav-icon" aria-label="visit homepage" aria-current="page">
        <img src="../assets/images/logo.jpg" alt="casa icon">
      </a>
      <button class="hamburger" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <!-- hamburger menu icon -->
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Navigation links -->
    <div class="navlinks-container">
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/Apropos">A propos</RouterLink>
      <RouterLink to="/partners">Partenaires</RouterLink>
      <RouterLink to="/Contact">Contact</RouterLink>
      <RouterLink to="/Blog">Nos produits</RouterLink>
    </div>

    <!-- Search and authentication -->
    <!-- <div class="nav-actions">
      <div class="nav-search">
        <form>
          <input class="form-control me-2" type="search" placeholder="Trouves un article..." aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Rechercher...</button>
        </form>
      </div>
      <div class="nav-authentication">
        <div class="iconNavbar">
          <RouterLink to="/login" class="sign-user" aria-label="sign in page">
            <i class="fas fa-regular fa-user" style="color: black"></i>
          </RouterLink>
        </div>
        <div class="sign-btns">
          <RouterLink to="/inscription" class="sign-user" aria-label="registre in page">Inscription</RouterLink>
          <RouterLink v-if="!isLoggedIn" to="/login" class="sign-user" aria-label="sign in page">Connexion</RouterLink>
          <RouterLink v-else to="/login" class="sign-user" aria-label="sign in page">Connecté</RouterLink>
        </div>
      </div>
    </div> -->
  </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)
export default {
  data() {
    return {
      isLoggedIn: false // variable pour suivre l'état de connexion
    }
  },
  mounted() {
    // Vérifiez si l'utilisateur est déjà connecté
    if (localStorage.getItem('token')) {
      this.isLoggedIn = true
    }

    // Ajoutez un événement à la touche hamburger
    const hamburgerToggler = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".navlinks-container");

    const toggleNav = () => {
      hamburgerToggler.classList.toggle("open");
      navLinksContainer.classList.toggle("open");
    };

    hamburgerToggler.addEventListener("click", toggleNav);
  },
  methods: {
    // Méthode pour mettre à jour l'état de connexion
    updateLoginStatus() {
      this.isLoggedIn = !this.isLoggedIn
    }
  }

}
</script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

nav {
  font-family: 'Mustica Pro SemiBold', sans-serif;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  height: 8vh;
  background: white;
  box-shadow: inset 0px -2px 0px #205af91b;

  padding: 30px 5px;
}

.nav-icon {
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 20px;
}

.nav-icon img {
  width: 100px;
  transform: rotate(-17deg) translateX(5px);

}

.second-part {
  display: flex;
  align-items: center;
  flex-direction: row;
}

.nav-search {
  display: flex;
  flex-direction: row;
}

.hamburger {
  display: none;
}

.navlinks-container a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
  font-size: 2em;
  font-weight: 500;
  display: inline-block;
  position: relative;
}

.navlinks-container a::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -3px;
  width: 100%;
  height: 1px;
  transform: scaleX(0);
  background: #333;
  transition: transform 0.3s ease-out;
}

.navlinks-container a:hover::after {
  transform: scaleX(1);
}

.nav-authentication {

  display: flex;
  flex-direction: row;
  padding-left: 30px;
}

.sign-btns a {
  font-size: 16px;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
  color: black;
  border-radius: 10px;
  border: solid 1px #205af92b;
  background: white;
}

.sign-btns.sign-user {
  display: none;
}

@media (max-width: 900px) {
  nav {
    padding: 15px 20px;
    position: relative;
  }

  .nav-icon {
    order: 2;
    margin: 0 auto;
  }

  .main-navlinks {
    order: 1
  }

  /* Hamburger */
  .hamburger {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: none;
    display: flex;
    background: white;
    align-items: center;
    position: relative;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #333;
    position: absolute;
    pointer-events: none;
    transition: transform 0.3s 0.15s ease-out;
  }

  .hamburger span:nth-child(1) {
    transform: translateY(7px);
  }

  .hamburger span:nth-child(3) {
    transform: translateY(-7px);
  }

  .hamburger span:nth-child(1),
  .hamburger span:nth-child(3) {
    transition: transform 0.3s ease-out;
  }

  .hamburger .open span:nth-child(1) {
    transform: translate(0) rotate(135deg);
  }

  .hamburger .open span:nth-child(3) {
    transform: translate(0) rotate(-135deg);
  }

  .hamburger .open span:nth-child(2) {
    opacity: 0;
    transition: opacity 0s ease-out;
  }

  .navlinks-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    position: absolute;
    z-index: 1;
    background: white;
    top: 100%;
    left: 0;
    height: 100vh;
    padding: 15px 50px 15px 20px;
    border-right: 1px solid #92c3eeb7;
    transform: translate(-100%);

  }

  .open {
    transform: translateX(0%);
  }

  .navlinks-container a {
    font-size: 18px;
    margin: 10px 0;
  }

  .second-part {
    order: 3;
    gap: 3%
  }

  .nav-authentication {
    margin-left: 0;
  }

  .sign-btns {
    display: none;
  }

  .sign-user {
    display: block;
    cursor: pointer;
    border: none;
  }
}

@media(max-width: 500px) {
  .nav-icon img {
    width: 50px;
  }

  .nav-icon span {
    font-size: 30px;
  }

  .navlinks-container {
    position: fixed;
    /* Change to fixed positioning */
    top: 10px;
    left: 0;
    width: 100%;
    /* Take up full screen width */
    height: 100vh;
    /* Take up full screen height */
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #333;
    position: absolute;
    pointer-events: none;
    transition: opacity 0.3s 0.15s ease-out;
    z-index: 3px;
  }
}
</style>