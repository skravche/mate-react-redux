import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';

//pagination пагінація....)
class App extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 10,
  };

  handlePageChange = pageNumber => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  //another method
  renderPagination() {
    const { itemsPerPage } = this.state;
    const pagesCount = Math.ceil(countries.length / itemsPerPage);
    const buttons = [];
    for (let i = 1; i <= pagesCount; i++) {
      buttons.push(
        <button key={i} onClick={() => this.handlePageChange(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  }

  render() {
    //  const currentPage = 1;  //  const itemsPerPage = 10; //the same:
    const { currentPage, itemsPerPage } = this.state;
    const itemStart = (currentPage - 1) * itemsPerPage;
    const itemEnd = itemStart + itemsPerPage;

    const countriesToShow = countries.slice(itemStart, itemEnd);

    return (
      <div className="App">
        <ul>
          {countriesToShow.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        {this.renderPagination()} //here is buttons...
      </div>
    );
  }
}

export default App;
/*
<button onClick={() => this.handlePageChange(1)}>1</button>
  <button onClick={() => this.handlePageChange(2)}>2</button>
  <button onClick={() => this.handlePageChange(3)}>3</button>
  */
