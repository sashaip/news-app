import React from 'react';

function Header({ query, setQuery, fetchNews, error }) {
  return (
    <header className="header">
      <h1>📰 Новости мира!</h1>
      <form onSubmit={fetchNews} className="search-form">
        <input
          type="text"
          placeholder="Введите тему"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Поиск</button>
      </form>
      {error && <p className="error">{error}</p>}
    </header>
  );
}

export default Header;
