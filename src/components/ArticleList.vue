<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="articles.length" style="display:flex;align-items: center; justify-content: center; flex-flow: row wrap;">
      <OneArticle
        v-for="article in articles"
        style="width: 300px; height: 230px;"
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :publish="article.publish"
        :author="article.author"
        
      />
    </ul>
    <h3 v-else>
        Сегодня без статей
    </h3>
    <ArticleForm title="New title" body="" author="" publish=""
      v-on:add-article="addArticle" />
  </div>
</template>

<script>
import ArticleForm from './ArticleForm.vue'
import OneArticle from './OneArticle.vue'
export default {
  name: 'ArticleList',
  props: {
    msg: String
  },
  components: {
      OneArticle,
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
      this.articles.push(newArticle);
      console.log(article.title);
    }
  },
  beforeMount: function(){
    fetch('http://localhost:3000/articles')
        // fetch('/articles.json')
    .then(response => response.json())
    .then(articles => this.articles = articles);
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
</style>
