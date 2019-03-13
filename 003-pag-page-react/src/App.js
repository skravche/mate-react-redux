import React, { Component } from 'react';
import './App.css';
import countries from './countries.json';
import Pagination from './pagination';

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

  render() {
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
        <Pagination
          perPage={itemsPerPage}
          total={countries.length}
          onChange={this.handlePageChange}
          activePage={currentPage}
        />
      </div>
    );
  }
}

export default App;
