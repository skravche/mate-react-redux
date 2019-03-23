import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductList from '../ProductListView';
import Product from '../ProductView';
import '../App/App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Route path="/" component={ProductList} exact />
        <Route path="/:product" component={Product} exact />
      </div>
    );
  }
}

export default App;
