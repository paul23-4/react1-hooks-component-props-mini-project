// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div className="App">
      <Header name="Your Blog Name" />
      <About image="https://via.placeholder.com/215" about="About your blog text" />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
