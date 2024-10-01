<template>
    <div class="blog">
      <h1 style="font-size: 36px; font-weight: bold;">Les produits de Aliment BouCasa</h1>
      <div>
        <div class="ArticleCard" v-if="casaproduit">
          <img
            class="img"
            :src="'http://localhost:1337' + produit.attributes.Couverture.data.attributes.url"
            alt=""
           
          />
          <h2 style="font-weight: bold; margin-bottom: 2px;">{{ casaproduit.attributes.Titre }}</h2>
          <div v-html="renderContent(casaproduit.attributes.ContenuLien)"></div>
          <div class="dateCreation" style="margin-top: 2px; text-align: end;">
            {{ new Date(casaproduit.attributes.Date).toLocaleDateString('fr-FR') }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
    <script>
    export default {
      titre: 'Blog',
      components: {
      },
      data() {
        return {
          casaproduit: null,
          }
        },
      methods: {
        renderContent(content) {
          const html = content.map((item) => {
            if (item.type === 'paragraph') {
              return `<p>${item.children.map((child) => {
                if (child.type === 'text') {
                  return child.text;
                } else if (child.type === 'link') {
                  return `<a class= "blogText" href="${child.url}">${child.children[0].text}</a>`;
                }
              }).join('')}</p>`;
            }
          }).join('');
          return html;
        }
      },
      mounted() { 
              
        fetch(`http://localhost:1337/api/casaproduits/${this.$route.params.id}?populate=*`)
          .then((res) => res.json())
            .then((res) => {
              this.casaproduit = res.data
              console.log("articles",this.casaproduit)
          });
      },
    }
    </script>
    
    <style>
  .blog {
    display: flex;
    align-items: center;
    margin-left: 100px;
    font-family: Open Sans, sans-serif;
    background-color: #f7f7f7; /* neutral background color */
  }
  
  .ArticleCard {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-size: 18px;
    padding: 20px;
    background-color: #f7f7f7;
  }
  .ArticleCard h2 {
    font-weight: bold;
    margin-bottom: 2px;
  }
  
  p {
    margin: 0;
  }
  
  .ArticleCard .dateCreation {
    margin-top: 2px;
    text-align: end;
  }
  
  .ArticleCard .img {
    max-width: 40%;
    height: auto;
    margin: 10px;
    float: left;
    margin-top: 10px;
    margin-left: 3px;
    border-radius: 10px; /* add a border-radius to the image */
  }
  
  .ArticleCard.inverted .img {
    float: right;
  }
  
  .arrow-icon {
    font-size: 12px;
    margin-left: 5px;
  }
  
  .blogText {
    font-weight: bold;
    color: #6999ff; /* accent color */
  }
  </style>