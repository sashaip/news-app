import React from 'react';

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">
        Читать далее...
      </a>
    </div>
  );
}

export default ArticleCard;
