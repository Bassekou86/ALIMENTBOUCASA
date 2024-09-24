<template  >
  <div class="blog">
    <h1 style="font-size: 36px; font-weight: bold;">Nos produits</h1>
    <div v-if = "casaproduits.length > 0" class = "list-articles">
        <CasaLayoutBlog v-for="(article, idx) in casaproduits" :key="article.id" :article="article" :inverted="idx % 2 === 0">
            {{ article.Couverture }}
          <template #Blog>Plus de détails</template>
        </CasaLayoutBlog>
    </div>
  </div>
</template> 

<script>
import CasaLayoutBlog from '@/layouts/CasaLayoutBlog.vue'
export default {
  titre: 'Articles',
  components: {
    CasaLayoutBlog,
  },
  data() {
    return {
      casaproduits:[],
      }
    },
       mounted() { 
        fetch("http://localhost:1337/api/casaproduits?populate=*")
          .then((res) => res.json())
          .then((res) => {
            this.casaproduits = res.data
            console.log("articles",this.casaproduits)
        });
  },
}
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
}

.list-articles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
}

.ArticleCard {
  flex-basis: 30%;
  margin: 10px;
  transition: transform 0.2s ease-in-out;
}

.ArticleCard:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
}

.ArticleCard {
  font-size: 18px;
  font-family: Arial, sans-serif;
}
</style>
