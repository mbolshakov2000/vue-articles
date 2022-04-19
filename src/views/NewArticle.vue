<template>
 <div style="text-align:center;">
   <ArticleForm title="New title" body="" author="" publish=""
      v-on:add-article="addArticle" />
 </div>
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue'
export default {
  name: 'NewArticle',
  props: {
      
  },
  components: {
    ArticleForm
  },
  data() {
      return {
          articles: [
          ]
      }
  },
  methods: {
    addArticle: function(article) {
      let newArticle = {
        id: this.articles.length+1,
        ...article
      }
      this.$root.$data.state.articles.push(newArticle);
      console.log(article.title);
      this.$router.push('/');
    }
  },
  beforeMount: function(){
    // fetch('http://localhost:3000/articles')
        fetch('/articles.json')
    .then(response => response.json())
    .then(articles => this.articles = articles.articles);
    console.log('Fetch data');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.art{
  border: thick double #32a1ce;
}
.notPublished{
    color: red;
}
</style>
