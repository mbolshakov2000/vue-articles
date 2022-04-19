<template>
  <div class="hello">
    <h2 style="margin-top: 100px">Добавить статью</h2>
    <form>
        <div><InputLine placeholder="Title" v-model="article.title" /></div>
        <div><InputLine placeholder="Author" v-model="article.author" /></div>
        <!-- <div><input type="text" v-model="article.title" placeholder="Title"></div> -->
        <!-- <div><input type="text" v-model="article.author" placeholder="Author"></div> -->
        <div><textarea v-model="article.body" placeholder="Body"></textarea></div>
        <div><label><input type="checkbox" v-model="article.publish"> Published</label></div>
        <div><input type="submit" value="Добавить" v-on:click.prevent="$emit('add-article',article)" /></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ArticleForm',
  props: {
    title: String,
    body: String,
    author: String,
    publish: Boolean
  },
  data() {
      return {
          article:
              {
                  title: this.title,
                  body: this.body,
                  author: this.author,
                  publish: this.publish
              }
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
.notPublished{
    color: red;
}
input, textarea{
    font-size:20px;
    margin: 5px;
}
</style>
