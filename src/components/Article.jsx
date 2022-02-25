import React from 'react';
import "../styles/Article.css";

const Article = ({heading,children}) => {
  return (
    <div className='article-container'>
      <h2 className='title-area'>{heading}</h2>
      <div className='article-content'>
        {children}
      </div>
    </div>
  )
}

export default Article