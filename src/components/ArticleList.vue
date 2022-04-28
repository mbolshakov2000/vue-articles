<template>
  <div class="hello">
    <h1>{{ msg }}: {{ count }} шт.</h1>
    <div v-if="articles_status == REQUESTED">
      <p> Пожалуйста, подождите... </p>
      <div class="progress-bar">
        <div class="progress-bar-value"></div>
      </div>
      <button @click="cancel">Отменить</button>
    </div>
    <div v-else-if="articles_status == FAILED">
      <p>Произошла ошибка: "{{articles_error}}" </p>
      <button v-on:click="reloadArticles">Обновить</button>
    </div>
    <div v-else-if="count" style="display:flex;align-items: center; justify-content: center; flex-flow: row wrap;">
      <OneArticle
        v-for="article in articles"
        :key="article.id"
        :id = "article.id"
        :title="article.title"
        :body="article.body"
        :publish="article.publish"
        :author="article.author"
      />
    </div>
    <h3 v-else>
        Сегодня без статей
    </h3>
  </div>
</template>

<script>
import OneArticle from './OneArticle.vue'
import {mapState} from 'vuex'
import {Types} from '@/store/types.js';
export default {
  name: 'ArticleList',
  props: {
    msg: String
  },
  components: {
      OneArticle
  },
  computed: mapState({
    count: state => state.articles.length,
    articles: state => state.articles,
    articles_status: 'articles_status',
    articles_error: 'articles_error',
  }),
  methods: {
    reloadArticles() {
      this.$store.dispatch(Types.actions.ARTICLES_LOAD);
    },
    cancel() {
      this.$store.dispatch(Types.actions.ARTICLES_LOAD_CANCEL);
    }
  },
  created() {
    // Instantiate article status constants for template.
    this.REQUESTED = Types.request_status.REQUESTED;
    this.FAILED = Types.request_status.FAILED;
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
.progress-bar {
  height: 4px;
  background-color: rgba(5, 114, 206, 0.2);
  width: 50%;
  margin: 10px auto;
  overflow: hidden;
}

.progress-bar-value {
  width: 100%;
  height: 100%;
  background-color: rgb(5, 114, 206);
  animation: indeterminateAnimation 1s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}
</style>
