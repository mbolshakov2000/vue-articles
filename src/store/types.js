export const Types = {
    mutations: {
      ARTICLES_REQUESTED: 'ARTICLES_REQUESTED',
      ARTICLES_SUCCEEDED: 'ARTICLES_SUCCEEDED',
      ARTICLES_FAILED: 'ARTICLES_FAILED',
      ARTICLES_CANCELED: 'ARTICLES_CANCELED',
      ARTICLE_ADD_REQUESTED: 'ARTICLE_ADD_REQUESTED',
      ARTICLE_ADD_SUCCEDED: 'ARTICLE_ADD_SUCCEDED',
      ARTICLE_ADD_FAILED: 'ARTICLE_ADD_FAILED',
    },
    actions: {
      ARTICLES_LOAD: 'ARTICLES_LOAD',
      ARTICLES_LOAD_CANCEL: 'ARTICLES_LOAD_CANCEL',
      ARTICLE_ADD: 'ARTICLE_ADD'
    },
    request_status: {
      REQUESTED: 'REQUESTED',
      SUCCEEDED: 'SUCCEEDED',
      FAILED: 'FAILED'
    }
  };