<template>
 <div style="text-align:center;">
   <ArticleForm title="New title" body="" author="" publish=""
      v-on:add-article="addArticle" />
 </div>
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue'
import store from '@/store'
export default {
  name: 'NewArticle',
  props: {
      
  },
  components: {
    ArticleForm
  },
  methods: {
    addArticle: function(article) {
      let newArticle = {
        // id: this.$root.$data.state.articles.length+1,
        id: store.state.articles.length+1,
        ...article
      }
      // this.$root.$data.state.articles.push(newArticle);
      store.dispatch('addArticle', newArticle);
      console.log(article.title);
      this.$router.push('/');
    }
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
