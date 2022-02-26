import React from 'react';
import "../styles/ArticleDark.css";

const Article = ({heading,children}) => {
  return (
    <div className='dark-container'>
      <h2 className='dark-title-area'>{heading}</h2>
      <div className='article-content'>
        {children}
      </div>
    </div>
  )
}

export default Article