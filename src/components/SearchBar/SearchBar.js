import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "",
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };

    this.getSortByClass = this.getSortByClass.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === this.sortByOptions[sortByOption]) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption,
    });
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value,
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOption)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange}
          />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
