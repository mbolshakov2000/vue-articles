<template>
  <div id="app">
    <ArticleList style="text-align: center;" msg="Список статей"/>
  </div>
</template>

<script>
import ArticleList from '../components/ArticleList.vue'
// App -> Home
export default {
  name: 'HomeView',
  components: {
    ArticleList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
