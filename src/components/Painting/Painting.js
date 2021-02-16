import React from "react";
import PropTypes from 'prop-types';

import defaultImage from "./default.jpg";
import "./Painting.css";


const Painting = ({ url, title, profileUrl, tag, price, quantity }) => {
    const avaibility = quantity < 10 ? "заканчиваеться" : "есть в наличии"; 
    
    return (
    <div className="Painting">
      <img src={url} alt={title} width="300" />
        <h2>{title}</h2>
        <p>Автор: <a href={profileUrl}>{tag}</a></p>
        <p>Цена: {price} кредитов</p>
        <p>Доступность: {avaibility}</p>
        <button type="button">Добавить в корзину</button>
    </div>
  );
 
};
Painting.defaultProps = {
  url: defaultImage,//при необходимости...
};
Painting.propTypes = {
  url: PropTypes.string,  //если не важно...
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,

};
export default Painting;