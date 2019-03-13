import React, { Component } from 'react';

class Pagination extends Component {
  renderButtons() {
    const { perPage, total, onChange, activePage } = this.props;
    const pagesCount = Math.ceil(total / perPage);

    return Array.from(Array(pagesCount), (v, i) => (
      <button
        className={i + 1 === activePage ? 'active-btn' : ''}
        key={i}
        onClick={() => onChange(i + 1)}
      >
        {i + 1}
      </button>
    ));
  }

  render() {
    const { onChange, activePage, total, perPage } = this.props;
    const pagesCount = Math.ceil(total / perPage);

    return (
      <div>
        <button
          className="prev-btn"
          onClick={() => onChange(activePage - 1)}
          disabled={activePage === 1}
        >
          Back
        </button>

        {this.renderButtons()}

        <button
          className="next-btn"
          onClick={() => onChange(activePage + 1)}
          disabled={pagesCount === activePage}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
