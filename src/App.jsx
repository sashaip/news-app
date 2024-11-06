import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import ArticleList from './components/ArticleList';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;


  const fetchNews = async (e) => {
    e.preventDefault();
    if (!query) return;
  
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything`, {
        params: {
          q: query,
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
      setError(null);
    } catch (err) {
      console.error("Error fetching news data:", err);
      setError('Error fetching news data. Please try again.');
    }
  };
  
  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} fetchNews={fetchNews} error={error} />
      <main className="articles">
        <ArticleList articles={articles} />
      </main>
    </div>
  );
}

export default App;
