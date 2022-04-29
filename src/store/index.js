import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {Types} from './types.js';
import loadArticlesModule from '../services/index.js' 

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    articles: [],
    articles_error: "",
    articles_status: "",
  },
  cancel_source: null,
  mutations: {
    ARTICLES_REQUESTED(state) {
      state.articles_status = Types.request_status.REQUESTED;
    },
    ARTICLES_SUCCEEDED(state, articles) {
      state.articles = articles;
      state.articles_status = Types.request_status.SUCCEEDED;
    },
    ARTICLES_FAILED(state, error) {
      state.articles_error = error;
      state.articles_status = Types.request_status.FAILED;
    },
    ARTICLE_ADD_REQUESTED(state, article) {
      state.articles.push(article);
    }
  },
  actions: {
    ARTICLES_LOAD(context) {
      loadArticlesModule.fetchArticles(context);
    },
    ARTICLES_LOAD_CANCEL(context) {
      loadArticlesModule.cancelFetchArticles(context);
    },
    ARTICLE_ADD(context, article) {
        context.commit(Types.mutations.ARTICLE_ADD_REQUESTED, article);
    }
  }
})
