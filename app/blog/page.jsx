'use client';
import React, { useState } from "react";
import { Checkbox } from "flowbite-react";


const Blog = () => {
  const [selectedArticles, setSelectedArticles] = useState([]);

  const articles = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' },
    { id: 3, title: 'Article 3' },
  ];

  const handleSelectArticle = (articleId) => {
    const newSelectedArticles = selectedArticles.includes(articleId)
        ? selectedArticles.filter(id => id !== articleId)
        : [...selectedArticles, articleId];
    setSelectedArticles(newSelectedArticles);
  };

  const handleNewArticle = () => {
    // Logic to handle new article creation
  };

  const handleModifyArticle = () => {
    // Logic to modify selected article
  };

  const handleDeleteArticle = () => {
    // Logic to delete selected articles
  };

  const buttons = [
    { type: 'new', label: 'New', onClick: handleNewArticle },
    { type: 'modify', label: 'Modify', onClick: handleModifyArticle},
    { type: 'delete', label: 'Delete', onClick: handleDeleteArticle,},
  ];

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
  
      </div>
      <div>
        {articles.map(article => (
          <div key={article.id} className="flex items-center gap-4 mb-2">
            <Checkbox id={`article-${article.id}`} checked={selectedArticles.includes(article.id)} onChange={() => handleSelectArticle(article.id)} />
            <label htmlFor={`article-${article.id}`}>{article.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
