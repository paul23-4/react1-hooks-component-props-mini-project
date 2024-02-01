// Article.js
import React from 'react';

const Article = ({ title, date = "January 1, 1970", preview, minutesToRead }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {Array.from({ length: minutesToRead <= 30 ? Math.ceil(minutesToRead / 5) : Math.ceil(minutesToRead / 10) }, (_, index) => (
          minutesToRead <= 30 ? '☕️' : '🍱'
        )).join(' ')} {minutesToRead} min read
      </p>
    </article>
  );
};

export default Article;
