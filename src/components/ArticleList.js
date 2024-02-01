// ArticleList.js
import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {Array.isArray(posts) && posts.map((post, index) => (
        <Article
          key={index}
          title={post.title}
          date={post.date || "January 1, 1970"}
          preview={post.preview}
          minutesToRead={Math.ceil(post.preview.split(' ').length / 200 / 5) * 5}
        />
      ))}
    </main>
  );
};

export default ArticleList;
