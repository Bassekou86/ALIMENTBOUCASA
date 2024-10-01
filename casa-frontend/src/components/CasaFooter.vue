<template>
    <div class="footer-container">
        <div class="footer-presentation">
            <div class="logos">
                <img alt="Vue logo"  src="../assets/images/logo-Paysbas.png" width="45" height="45" />
                <img alt="Vue logo"  src="../assets/images/logo-Orange.png" width="45" height="45" />
                <img alt="Vue logo"  src="../assets/images/logo-haske.png" width="45" height="45" />
            </div>
            <div class="span-container">
                <span class="title-span">Découvrez BOU'CASA</span>
                <span class="text-span-footer">Aliment Bou’Casa est une entreprise spécialisée dans la production et la commercialisation d'aliments pour bétail et porcs, basée à Kolda, Sénégal</span>
            </div>
            
        </div>
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
          <RouterLink to="/Equipe">L'Equipe</RouterLink>
        </li>
        <li>
          <RouterLink to="/Blog">Nos produits</RouterLink>
        </li>
        <li>
            <RouterLink to="/Contact">Contactez nous</RouterLink>
        </li>
        <li>
         <a href="#">Haut de Page</a>
        </li>
      </ul>
        </div>
        <div>
            <div class="titleFooter">Qui sommes nous ?</div>
            <ul>
                <li>Qu'est ce que c'est?</li>
                <li>Comment ca marche?</li>
                <li>Qui sommes nous?</li>
                <li>Nos Engagements</li>
            </ul>
        </div>
        <div class="lastSection">
            <div class="titleFooter">A propos</div>
            <ul class="nav-items">
                <li>Recrutement</li>
                <li>Mentions Légales</li>
                <li>Gestion des Cookies</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "CasaFooter"
}
</script>

<style scoped>
.footer-container {
    background-color: #000; /* noir */
  display: flex;
  align-content: center;
  align-items: flex-start;
  justify-content: space-around;
  color: #fff; /* blanc */
  padding: 20px 30px;
  border-radius: 25% 25% 0% 0%;
}
.footer-presentation{
    width: 30%;
    display: flex;
    gap: 50px;
    align-items: center;
}
.logos{
    display: grid;
    grid-template-columns: repeat(2, 1fr)2fr ;
    gap:10px
}
span{
    text-align: justify;
  margin-top: 10px;
  color: #fff; /* blanc */
}
.span-container{
    display: flex;
    flex-direction: column;
}
.title-span{
    font-size: 24px;
  font-weight: bold;
  margin-top: 0px;
  color: #fff; /* blanc */
}
.text-span-footer {
  font-size: 18px;
  font-style: italic;
  color: #fff; /* blanc */
}

.nav-items li {
  color: #fff; /* blanc */
}

a {
  text-decoration: none;
  color: #fff; /* blanc */
}

a:hover {
  color: #fff; /* blanc */
}

.titleFooter {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff; /* blanc */
}
</style>