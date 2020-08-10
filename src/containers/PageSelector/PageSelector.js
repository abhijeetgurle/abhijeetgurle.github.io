import React from "react";
import qs from "qs";

import Pagination from "../../UI/Pagination/Pagination";

class PageSelector extends React.Component {
  state = {
    pageSize: 50,
    pageSelected: 1,
    numPages: 5,
  };

  componentDidMount() {
    this.updatePageSelected();
    this.setNumPages();
  }

  componentDidUpdate() {
    this.updatePageSelected();
    this.setNumPages();
  }

  setNumPages = () => {
    const numPages = Math.ceil(
      Number(this.props.totalResults) / Number(this.props.pageSize)
    );

    if (this.state.numPages !== numPages) {
      this.setState({
        numPages: numPages,
      });
    }
  };

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
    if (page > this.state.numPages) {
      page = this.state.numPages;
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
        numPages={this.state.numPages}
      ></Pagination>
    );
  }
}

export default PageSelector;
