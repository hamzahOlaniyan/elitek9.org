import React from "react";

const Article = ({ articles, id }: { articles: any; id: any }) => {
  return (
    <article id={id}>
      <h1 className="text-2xl font-semibold">{articles.title}</h1>
      <p className="py-2 text-sm">{articles.content}</p>
    </article>
  );
};

export default Article;
