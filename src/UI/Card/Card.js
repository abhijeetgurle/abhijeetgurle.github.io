import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={props.countryDetails.flag} alt="Country's Flag" />
        <div className={classes["card-body"]}>
          <div className={classes["card-text"]}>
            <h3>{props.countryDetails.name}</h3>
            <div>Native Name: {props.countryDetails.nativeName}</div>
            <div>Area: {props.countryDetails.area}</div>
            <div>Capital: {props.countryDetails.capital}</div>
            <div>Population: {props.countryDetails.population}</div>
            <div>Region: {props.countryDetails.region}</div>
            <div>
              Currencies:
              <ul>
                {props.countryDetails.currencies.map((currency) => (
                  <li key={currency.name}>
                    {currency.name} ({currency.symbol})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              Timezones:
              <ul>
                {props.countryDetails.timezones.map((timezone, index) => (
                  <li key={index}>{timezone}</li>
                ))}
              </ul>
            </div>
            <div>
              Borders:
              <ul>
                {props.countryDetails.borders.map((border, index) => (
                  <li key={index}>{border}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
