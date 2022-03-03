//Dark theme reusable article component. Heading must be passed in,
//and content of the article is controlled by passing it in as a child.

import React from 'react';
import '../styles/ArticleDark.css';

const Article = ({ heading, children }) => {
  return (
    <article className="dark-container">
      <h2 className="dark-title-area">{heading}</h2>
      <section className="article-content">{children}</section>
    </article>
  );
};

export default Article;
