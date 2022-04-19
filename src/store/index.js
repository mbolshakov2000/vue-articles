var store = {
    debug: true,
    state: {
        articles: []
    },
    setArticlesAction(newValue) {
        if (this.debug) console.log("setArticlesAction вызвано с ", newValue);
        this.state.articles = newValue;
    },
    clearArticlesAction(){
        if (this.debug) console.log("clearArticlesAction вызвано");
        this.state.articles = "";
    },
    loadArticlesAction(){
        // fetch('http://localhost:3000/articles')
            fetch('/articles.json')
        .then(response => response.json())
        .then(articles => this.state.articles = articles.articles);
    }
}

export default store