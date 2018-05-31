import React, { Component } from 'react';
import DataApi from '../dataAPI';
import { data } from '../testData';
import ArticleList from './articleList';

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  render() {
    console.log(this.state);
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
