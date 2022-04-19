<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul v-if="this.$root.$data.state.articles.length" style="display:flex;align-items: center; justify-content: center; flex-flow: row wrap;">
      <OneArticle
        v-for="article in this.$root.$data.state.articles"
        :key="article.id"
        :id = "article.id"
        :title="article.title"
        :body="article.body"
        :publish="article.publish"
        :author="article.author"
        
      />
    </ul>
    <h3 v-else>
        Сегодня без статей
    </h3>
  </div>
</template>

<script>
import OneArticle from './OneArticle.vue'

export default {
  name: 'ArticleList',
  props: {
    msg: String
  },
  components: {
      OneArticle
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
