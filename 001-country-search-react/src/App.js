import React, { Component } from 'react';
import countries from './countries';
import './App.css';

class App extends Component {
  state = {
    query: '',
    isReversed: true,
  };

  handleClickRev = () => {
    const { isReversed } = this.state;

    this.setState({
      isReversed: !isReversed,
    });
  };

  render() {
    const { query } = this.state;
    const filteredCountries = countries.filter(c =>
      c.toLowerCase().includes(query.toLowerCase())
    );

    const status = this.state.isReversed
      ? filteredCountries
      : filteredCountries.reverse();

    return (
      <div className="App">
        <div className="box">
          <input
            onChange={e => this.setState({ query: e.target.value })}
            value={query}
          />
          <button onClick={this.handleClickRev}>Reverse</button>
          {query && (
            <p>
              Found {filteredCountries.length} / {countries.length} for query "
              {query}"
            </p>
          )}

          <ul className={status}>
            {filteredCountries.map(c => (
              <li key={c}>{c} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
