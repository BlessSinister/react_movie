import React from 'react'

class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }
  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => this.props.searchMovies(this.state.search, this.state.type)
    )
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <input
                className="validate"
                id="email_inline"
                type="search"
                placeholder="search"
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                onKeyDown={this.handleKey}
              />
              <button
                className="btn search-btn"
                onClick={() =>
                  this.props.searchMovies(this.state.search, this.state.type)
                }
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div>
          <form action="#" className="filter-wrapper">
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movie</span>
            </label>

            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
          </form>
        </div>
      </>
    )
  }
}

export { Search }
