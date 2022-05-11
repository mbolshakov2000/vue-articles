import {Types} from '../store/types.js';
import axios from 'axios'
// import VueAxios from 'vue-axios'

export default {
  fetchArticles(context){
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
  cancelFetchArticles(context){
    if (this.cancel_source) {
      this.cancel_source.cancel('Loading has been canceled!');
      this.cancel_source = null;
      console.log('Request canceled');
    }
    context.commit(Types.mutations.ARTICLES_FAILED, 'Loading has been canceled...');
  },
  fetchWorkers(context){
    context.commit(Types.mutations.WORKERS_REQUESTED);
    axios
      .get('http://localhost:10000/workers'
      )
      .then(response => {
        context.commit(Types.mutations.WORKERS_SUCCEEDED, response.data);
        console.log("Fetch data", response.data);
      });
  }
}