import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {Types} from './types.js';

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
      if (this.cancel_source) {
        this.cancel_source.cancel('Loading again!');
        console.log('Request reloaded');
      }
      this.cancel_source = axios.CancelToken.source();

      context.commit(Types.mutations.ARTICLES_REQUESTED);
      axios
        .get('http://localhost:10000/articles',
          {cancelToken: this.cancel_source.token}
        )
        .then(response => {
          context.commit(Types.mutations.ARTICLES_SUCCEEDED, response.data);
          console.log("Fetch data", response.data);
        })
        .catch(error => {
          context.commit(Types.mutations.ARTICLES_FAILED, error);
          console.log("Fetch error", error);
        });
    },
    ARTICLES_LOAD_CANCEL(context) {
      if (this.cancel_source) {
        this.cancel_source.cancel('Loading has been canceled!');
        this.cancel_source = null;
        console.log('Request canceled');
      }
      context.commit(Types.mutations.ARTICLES_FAILED, 'Loading has been canceled...');
    },
    ARTICLE_ADD(context, article) {
        context.commit(Types.mutations.ARTICLE_ADD_REQUESTED, article);
    }
  },
//   modules: {
//       services: {
//         mutations: {
//             ARTICLES_REQUESTED(state) {
//               state.articles_status = Types.request_status.REQUESTED;
//             },
//             ARTICLES_SUCCEEDED(state, articles) {
//               state.articles = articles;
//               state.articles_status = Types.request_status.SUCCEEDED;
//             },
//             ARTICLES_FAILED(state, error) {
//               state.articles_error = error;
//               state.articles_status = Types.request_status.FAILED;
//             }
//         },
//         actions: {
//             ARTICLES_LOAD(context) {
//                 if (this.cancel_source) {
//                   this.cancel_source.cancel('Loading again!');
//                   console.log('Request reloaded');
//                 }
//                 this.cancel_source = axios.CancelToken.source();
          
//                 context.commit(Types.mutations.ARTICLES_REQUESTED);
//                 axios
//                   .get('http://localhost:10000/articles',
//                     {cancelToken: this.cancel_source.token}
//                   )
//                   .then(response => {
//                     context.commit(Types.mutations.ARTICLES_SUCCEEDED, response.data);
//                     console.log("Fetch data", response.data);
//                   })
//                   .catch(error => {
//                     context.commit(Types.mutations.ARTICLES_FAILED, error);
//                     console.log("Fetch error", error);
//                   });
//               },
//               ARTICLES_LOAD_CANCEL(context) {
//                 if (this.cancel_source) {
//                   this.cancel_source.cancel('Loading has been canceled!');
//                   this.cancel_source = null;
//                   console.log('Request canceled');
//                 }
//                 context.commit(Types.mutations.ARTICLES_FAILED, 'Loading has been canceled...');
//               }
//           }
//       }
//     }
})
