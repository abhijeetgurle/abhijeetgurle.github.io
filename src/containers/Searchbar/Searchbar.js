import React from "react";
import qs from "qs";

import SearchInput from "../../UI/SearchInput/SearchInput";

class Searchbar extends React.Component {
  state = {
    q: "",
  };

  componentDidMount() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;

    if (query) {
      this.setState({
        q: query,
      });
    }
  }

  onChangeQueryHandler = (q) => {
    this.setState({
      q: q,
    });
  };

  onSearchHandler = () => {
    let selectedRegion = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).region;

    if (selectedRegion) {
      this.props.history.push(
        `/countries?q=${this.state.q}&region=${selectedRegion}`
      );
    } else {
      this.props.history.push(`/countries?q=${this.state.q}`);
    }
  };

  onKeyPressedHandler = (event) => {
    if (event.key === "Enter") {
      this.onSearchHandler();
    }
  };

  render() {
    return (
      <SearchInput
        onChangeQueryHandler={this.onChangeQueryHandler}
        onSearchHandler={this.onSearchHandler}
        onKeyPressedHandler={this.onKeyPressedHandler}
        q={this.state.q}
      ></SearchInput>
    );
  }
}

export default Searchbar;
