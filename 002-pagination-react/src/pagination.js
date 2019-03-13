import React, { Component } from 'react';

class Pagination extends Component {
  renderButtons() {
    const { perPage, total, onChange } = this.props;
    const pagesCount = Math.ceil(total / perPage);
    const lastPage = pagesCount - this.props.activePage;

    this.lastPage = lastPage;

    return Array.from(Array(pagesCount), (v, i) =>
      i + 1 === this.props.activePage ? (
        <button className="active-btn" key={i} onClick={() => onChange(i + 1)}>
          {i + 1}
        </button>
      ) : (
        <button key={i} onClick={() => onChange(i + 1)}>
          {i + 1}
        </button>
      )
    );
  }

  render() {
    return (
      <div>
        <button
          className="prev-btn"
          onClick={() => this.props.onChange(this.props.activePage - 1)}
          disabled={this.props.activePage === 1}
        >
          Back
        </button>

        {this.renderButtons()}

        <button
          className="next-btn"
          onClick={() => this.props.onChange(this.props.activePage + 1)}
          disabled={this.lastPage === 0}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
