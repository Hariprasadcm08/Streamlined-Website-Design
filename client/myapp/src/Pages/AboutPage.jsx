import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/AboutPage.css'

export default function HomePage() {
    const [image, setImage] = useState(null);
    const [news, setNews] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Fetching a random image from Unsplash
      axios.get('https://localhost:8000/getAbout').then((response) => {
        setImage(response.config.url);
      }).catch((error) => {
        setError(error.message);
      });
  
      // Fetching recent coding news from Hacker News API
      axios.get('https://hn.algolia.com/api/v1/search?query=coding').then((response) => {
        setNews(response.data.hits);
      }).catch((error) => {
        setError(error.message);
      });
    }, []);
  
    return (
      <div>
        {error && <p>{error}</p>}
        {image && <img src={image} alt="Random Unsplash" />}
        {news && news.map((item) => (
          <div key={item.objectID}>
            <h2>{item.title}</h2>
            <p>{item.author}</p>
          </div>
        ))}
      </div>
    );
  }
  