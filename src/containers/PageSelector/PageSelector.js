import React from "react";
import qs from "qs";

import Pagination from "../../UI/Pagination/Pagination";

class PageSelector extends React.Component {
  state = {
    pageSize: 50,
    pageSelected: 1,
  };

  componentDidMount() {
    this.updatePageSelected();
  }

  componentDidUpdate() {
    this.updatePageSelected();
  }

  updatePageSelected = () => {
    let pageSelected = Number(
      qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true,
      }).page
    );

    if (pageSelected && this.state.pageSelected !== pageSelected) {
      this.setState({
        pageSelected: pageSelected,
      });
    }
  };

  changePageSelectedHandler = (page) => {
    console.log(this.props);
    if (page > 5) {
      page = 5;
    } else if (page < 1) {
      page = 1;
    }
    this.setState({
      pageSelected: page,
    });

    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;

    let selectedRegion = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).region;

    if (query && selectedRegion) {
      this.props.history.push(
        `/countries?q=${query}&region=${selectedRegion}&page=${page}`
      );
    } else if (query) {
      this.props.history.push(`/countries?q=${query}&page=${page}`);
    } else if (selectedRegion) {
      this.props.history.push(
        `/countries?region=${selectedRegion}&page=${page}`
      );
    } else {
      this.props.history.push(`/countries?page=${page}`);
    }
  };

  render() {
    return (
      <Pagination
        changePageSelectedHandler={this.changePageSelectedHandler}
        pageSelected={this.state.pageSelected}
      ></Pagination>
    );
  }
}

export default PageSelector;
