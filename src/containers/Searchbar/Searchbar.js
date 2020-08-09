import React from "react";

import SearchInput from "../../UI/SearchInput/SearchInput";

class Searchbar extends React.Component {
  state = {
    q: "",
  };

  onChangeQueryHandler = (q) => {
    this.setState({
      q: q,
    });
  };

  onSearchHandler = () => {
    this.props.history.push(`/countries?q=${this.state.q}`);
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
