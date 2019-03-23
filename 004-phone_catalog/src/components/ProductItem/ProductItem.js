import React, { Component } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    const { imageUrl, name, snippet, id } = this.props;
    console.log(id);
    return (
      <li className="phone-list">
        <Link to={`/${id}`}>
          <img
            className="picphone"
            src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${imageUrl}`}
            alt=" "
          />
        </Link>
        <div className="phone-text">
          <Link to={`/${id}`}>
            <p>{name} </p>
          </Link>
          <p className="description">{snippet}</p>
        </div>
      </li>
    );
  }
}

export default ProductItem;
