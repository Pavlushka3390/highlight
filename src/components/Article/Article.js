import React from 'react';
import PropTypes from "prop-types";

const Article = ({ title, views }) => (
  <div className="item item-article">
    <h3><button>{title} </button></h3>
    <p className="views">Прочтений: {views}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number
}

Article.withCondition = ({ type }) => "article" === type;

export default Article;