<template>
  <div class="hello">
    <h2>Добавить статью</h2>
    <v-form style="width: 50%; margin: 10px auto;">
        <div><InputLine placeholder="Title" v-model="article.title" /></div>
        <div><InputLine placeholder="Author" v-model="article.author" /></div>
        <div><v-textarea v-model="article.body" placeholder="Body"></v-textarea></div>
        <div><v-checkbox :label="`Опубликована`" v-model="article.publish"></v-checkbox></div>
        <div><AddButton color="success" type="submit" v-on:click.prevent="$emit('add-article',article)">статью</AddButton></div>
        <!-- <div><v-btn color="success" type="submit" v-on:click.prevent="$emit('add-article',article)"> Добавить </v-btn></div> -->
    </v-form>
  </div>
</template>

<script>
import AddButton from './AddButton.js'
export default {
  name: 'ArticleForm',
  props: {
    title: String,
    body: String,
    author: String,
    publish: Boolean
  },
  components: {
    AddButton
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
