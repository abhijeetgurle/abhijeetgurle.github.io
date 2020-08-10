import React from "react";
import classes from "./CountryList.module.css";

const CountryList = (props) => {
  const countriesJSX = props.countries.map((country, index) => (
    <li
      className={classes["table-row"]}
      key={country.alpha3Code}
      onClick={() => props.onCountryClickHandler(index)}
    >
      <div
        className={[classes.col, classes["col-1"]].join(" ")}
        data-label="Flag"
      >
        <img src={country.flag} alt="Country's flag" width="45px"></img>
      </div>
      <div
        className={[classes.col, classes["col-2"]].join(" ")}
        data-label="Country Name"
      >
        {country.name}
      </div>
      <div
        className={[classes.col, classes["col-3"]].join(" ")}
        data-label="Capital"
      >
        {country.capital ? country.capital : "-"}
      </div>
      <div
        className={[classes.col, classes["col-4"]].join(" ")}
        data-label="Region"
      >
        {country.region}
      </div>
    </li>
  ));

  return (
    <div className={classes["container"]} style={{ margin: "auto" }}>
      <ul className={classes["responsive-table"]}>
        <li className={classes["table-header"]}>
          <div className={[classes.col, classes["col-1"]].join(" ")}>Flag</div>
          <div className={[classes.col, classes["col-2"]].join(" ")}>
            Country Name
          </div>
          <div className={[classes.col, classes["col-3"]].join(" ")}>
            Capital
          </div>
          <div className={[classes.col, classes["col-4"]].join(" ")}>
            Region
          </div>
        </li>
        {countriesJSX}
      </ul>
    </div>
  );
};

export default CountryList;
