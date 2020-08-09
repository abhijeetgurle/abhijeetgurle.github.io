import React from "react";
import qs from "qs";

import axios from "../../axios";
import CountryList from "../../components/CountryList/CountryList";
import Searchbar from "../Searchbar/Searchbar";
import Loader from "../../UI/Loader/Loader";

class Countries extends React.Component {
  state = {
    q: "",
    countries: [],
    loading: false,
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

    this.getCountries();
  }

  componentDidUpdate() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    }).q;

    console.log(query);

    if (query !== undefined && this.state.q !== query) {
      this.setState({
        q: query,
      });

      this.getCountries(query);
    }
  }

  getCountries = (query = null) => {
    this.setState({
      loading: true,
    });

    if (!query) {
      axios
        .get("/all?fields=name;capital;flag;region;alpha3Code")
        .then((res) => {
          console.log(res);
          this.setState({
            countries: res.data,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    } else {
      axios
        .get(`/name/${query}?fields=name;capital;flag;region;alpha3Code"`)
        .then((res) => {
          console.log(res);
          this.setState({
            countries: res.data,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Searchbar {...this.props}></Searchbar>
        {this.state.loading ? (
          <Loader></Loader>
        ) : (
          <CountryList countries={this.state.countries}></CountryList>
        )}
      </div>
    );
  }
}

export default Countries;
