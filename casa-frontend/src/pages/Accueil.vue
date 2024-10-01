<template>
  <div className='container'>
    <h1 className='abc-title'>Bienvenue chez Aliment Bou Casa</h1>
    <br></br>
    <div className="flex-container">
      <div className="image-container">
        <img src="../assets/images/homeimage.jpg" alt="homeimage" className="abc-homeimage" />
      </div>
      <div className="text-container">
        <h1 className='abc-title1'>À propos : </h1>
        <p className='abc-paragraphe'>Aliment Bou’Casa est une entreprise spécialisée dans la production et la
          commercialisation d'aliments pour bétail et porcs, basée à Kolda, Sénégal. <br></br>
          Nous utilisons des ressources locales, notamment la gousse du piliostigma reticulatum, pour fabriquer des
          aliments de haute qualité. <br></br>
          Nos produits comprennent des aliments en granulés pour porcelets, des aliments de croissance pour porcs, des
          aliments pour tous ruminants et des aliments pour vaches laitières. <br></br>
          En valorisant les ressources locales et en collaborant avec les communautés rurales, nous visons à soutenir
          l'autonomie financière des femmes rurales et à promouvoir une agriculture durable.
        </p>
      </div>
      <hr>
      <div className="flex-container">
        <div className="text-container">
          <h1 className='abc-title1'>Fontadeur Bou'Casa : </h1>
          <p className='abc-paragraphe'>Je suis Kourfia Diakité fondateur de l’entreprise Aliment Bou’Casa.
            Passionné par l'agriculture et l'élevage.<br></br>J'ai créé Aliment Bou’Casa avec la vision de
            résoudre les défis de l'approvisionnement
            en nutriments pour les animaux, en particulier pendant la saison sèche dans la région de la Casamance.
            <br></br>Notre entreprise utilise des ressources locales, notamment la gousse du piliostigma reticulatum,
            pour
            produire des aliments équilibrés pour le bétail et les porcs. <br></br> Nous collaborons avec les femmes
            rurales,
            leur offrant une source de revenus tout en contribuant au développement économique de la région.
            <br></br>Notre
            mission est d'innover et de soutenir durablement les éleveurs tout en ayant un impact positif sur
            notre communauté.
          </p>
        </div>
        <div className="image-container">
          <img src="../assets/images/fondateur.jpg" alt="fontadeur-image" className="abc-imagefondateur" />
        </div>
        <hr>
        <div className="products-container">
          <h1 className='abc-title1'>Nos produits :</h1>
          <div className="product-list">
            <div className="product-item">
              <img src="../assets/images/image1.jpg" alt="product1" className="abc-product-image" />
              <h2>Aliments en granulés pour porcelets</h2>
              <p> Description du produit </p>
            </div>
            <div className="product-item">
              <img src="../assets/images/image2.jpg" alt="product2" className="abc-product-image" />
              <h2>Aliments de croissance pour porcs</h2>
              <p> Description du produit </p>
            </div>
            <div className="product-item">
              <img src="../assets/images/image3.jpg" alt="product3" className="abc-product-image" />
              <h2>Aliments pour tous ruminants</h2>
              <p> Description du produit </p>
            </div>
            <div className="product-item">
              <img src="../assets/images/image4.jpg" alt="product4" className="abc-product-image" />
              <h2>Aliments pour vaches laitières</h2>
              <p> Description du produit </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  top: 20px;
}

.abc-title {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  font-size: 48px;
  color: #333;
  /* more accessible color */
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  margin-bottom: 20px;
  /* add whitespace */
}

.abc-title1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
  color: #333;
  /* more accessible color */
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  text-align: left;
  /* improve text alignment */
  margin-bottom: 10px;
  /* add whitespace */
}

.abc-paragraphe {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #333;
  /* more accessible color */
  margin-bottom: 20px;
  /* add whitespace */
}

.abc-paragraphe {
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #333;
  /* more accessible color */
  margin-bottom: 20px;
  /* add whitespace */
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.image-container {
  flex-basis: 35%;
  margin: 20px;
}

.text-container {
  flex-basis: 50%;
  margin: 20px;
}

.abc-homeimage {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.abc-imagefondateur {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  float: right;
}

.products-container {
  margin-top: 40px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.abc-product-image{
  width: 20%;
}
.product-item {
  flex-basis: 25%; 
  margin: 20px; 
  text-align: center; 
}

.product-item img {
  width: 100%; 
  height: 150px; 
  object-fit: cover; 
  border-radius: 10px; 
}

.product-item h2 {
  font-size: 18px; 
  margin-bottom: 10px; 
}

.product-item p {
  font-size: 14px; 
  color: #666; 
}
</style>