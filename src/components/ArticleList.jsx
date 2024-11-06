import React from 'react';
import ArticleCard from './ArticleCard';

function ArticleList({ articles }) {
  return (
    <>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))
      ) : (
        <p className="no-articles">Статьи не найдены</p>
      )}
    </>
  );
}

export default ArticleList;
