import React from "react";
import qs from "qs";

import axios from "../../axios";
import CountryList from "../../components/CountryList/CountryList";
import Searchbar from "../Searchbar/Searchbar";
import Loader from "../../UI/Loader/Loader";
import Dropdown from "../../UI/Dropdown/Dropdown";
import PageSelector from "../PageSelector/PageSelector";

class Countries extends React.Component {
  state = {
    q: "",
    countries: [],
    displayedCountries: [],
    selectedRegion: null,
    loading: false,
    pageSize: 50,
    pageSelected: 1,
  };

  componentDidMount() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;

    let selectedRegion = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).region;

    let pageSelected = Number(
      qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true,
      }).page
    );

    if (selectedRegion === "All") {
      selectedRegion = null;
    }

    if (query) {
      this.setState({
        q: query,
      });
    }

    if (selectedRegion) {
      this.setState({
        selectedRegion: selectedRegion,
      });
    }

    if (pageSelected) {
      this.setState({
        pageSelected: pageSelected,
      });
    }

    this.getCountries(query, selectedRegion);
  }

  componentDidUpdate() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;

    let selectedRegion = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).region;

    let pageSelected = Number(
      qs.parse(this.props.location.search, {
        ignoreQueryPrefix: true,
      }).page
    );

    if (selectedRegion === "All") {
      selectedRegion = null;
    }

    if (
      this.state.q !== query &&
      this.state.selectedRegion !== selectedRegion
    ) {
      this.setState({
        q: query,
        selectedRegion: selectedRegion,
        pageSelected: 1,
      });
      this.filterCountries(query, selectedRegion);
    } else if (this.state.q !== query) {
      this.setState({
        q: query,
        pageSelected: 1,
      });
      this.filterCountries(query, selectedRegion);
    } else if (this.state.selectedRegion !== selectedRegion) {
      this.setState({
        selectedRegion: selectedRegion,
        pageSelected: 1,
      });
      this.filterCountries(query, selectedRegion);
    }

    if (pageSelected && this.state.pageSelected !== pageSelected) {
      this.setState({
        pageSelected: pageSelected,
      });
    }
  }

  getCountries = (query, selectedRegion) => {
    this.setState({
      loading: true,
    });

    axios
      .get("/all?fields=name;capital;flag;region;alpha3Code")
      .then((res) => {
        this.setState({
          countries: res.data,
          loading: false,
        });
        this.filterCountries(query, selectedRegion);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
        });
      });
  };

  filterCountries = (query = null, selectedRegion = null) => {
    let displayedCountries = this.state.countries;

    if (query && selectedRegion) {
      displayedCountries = displayedCountries.filter((country) => {
        return (
          country.name.toLowerCase().includes(query.toLowerCase()) &&
          country.region === selectedRegion
        );
      });
    } else if (query) {
      displayedCountries = displayedCountries.filter((country) => {
        return country.name.toLowerCase().includes(query.toLowerCase());
      });
    } else if (selectedRegion) {
      displayedCountries = displayedCountries.filter((country) => {
        return country.region === selectedRegion;
      });
    }

    this.setState({
      displayedCountries: displayedCountries,
    });
  };

  onCountryClickHandler = (index) => {
    const code = this.state.displayedCountries[index].alpha3Code;
    const query = this.state.q;
    const selectedRegion = this.state.selectedRegion;

    if (query && selectedRegion) {
      this.props.history.push(
        `/countries/${code}?q=${query}&region=${selectedRegion}`
      );
    } else if (query) {
      this.props.history.push(`/countries/${code}?q=${query}`);
    } else if (selectedRegion) {
      this.props.history.push(`/countries/${code}?region=${selectedRegion}`);
    } else {
      this.props.history.push(`/countries/${code}`);
    }
  };

  getDropdownOptions = () => {
    const allRegions = this.state.countries.map((country) => country.region);
    return allRegions.filter((region, i, ar) => ar.indexOf(region) === i);
  };

  onSelectRegionHandler = (selectedRegion) => {
    const query = this.state.q;

    if (query && selectedRegion) {
      this.props.history.push(`/countries?q=${query}&region=${selectedRegion}`);
    } else if (selectedRegion) {
      this.props.history.push(`/countries?region=${selectedRegion}`);
    }
  };

  render() {
    const dropdownOptions = this.getDropdownOptions();

    return (
      <div className="container">
        <Searchbar {...this.props}></Searchbar>
        <Dropdown
          options={dropdownOptions}
          selectedRegion={this.state.selectedRegion}
          onSelectRegionHandler={this.onSelectRegionHandler}
        ></Dropdown>
        {this.state.loading ? (
          <Loader></Loader>
        ) : this.state.displayedCountries.length === 0 ? (
          <div style={{ marginTop: "150px", color: "red" }}>
            No Results Found
          </div>
        ) : (
          <CountryList
            countries={this.state.displayedCountries.slice(
              (this.state.pageSelected - 1) * this.state.pageSize,
              this.state.pageSelected * this.state.pageSize
            )}
            onCountryClickHandler={this.onCountryClickHandler}
          ></CountryList>
        )}
        {this.state.displayedCountries.length > 50 ? (
          <PageSelector
            {...this.props}
            totalResults={this.state.displayedCountries.length}
            pageSize={this.state.pageSize}
          ></PageSelector>
        ) : null}
      </div>
    );
  }
}

export default Countries;
