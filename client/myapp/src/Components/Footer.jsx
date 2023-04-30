import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
        <span className="text">© 2023 Website</span>
      </div>
    </footer>
  );
}
