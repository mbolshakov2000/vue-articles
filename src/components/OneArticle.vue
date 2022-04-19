<template>
  <div class="art" style="width: 300px; height: 230px; text-align: center; margin-top: 20px;" v-bind:class="{ notPublished: !checked}">
    <router-link style="font-size: 30px;" :to="articleUrl">{{title}}</router-link>
    <h2 v-bind:style="{fontFamily: authorFont}">{{authorCapitalLetters}}</h2>
    <h2>{{body}}</h2>
    <label><input type="checkbox" @click="checkChange()" v-bind:checked="checked">Опубликована</label>
  </div>
</template>

<script>
export default {
  name: 'OneArticle',
  props: {
      id: Number,
      title: String,
      body: String,
      author: String,
      publish: Boolean
  },
  data(){
    return {
      checked: this.publish
    }
  },
  computed:{
    authorFont(){
      if (this.checked)
        return "Arial";
      else return "Georgia";
    },
    authorCapitalLetters(){
      return this.author.toUpperCase()
    },
    articleUrl(){
      return '/article/'+this.id;
    }
  },
  watch:{
    checked(newVal, oldVal){
      console.log(`${oldVal} ${newVal}`);
    }
  },
  methods:{
    checkChange(){
      this.checked = !this.checked;
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
