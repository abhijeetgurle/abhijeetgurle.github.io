import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img src={props.countryDetails.flag} alt="Country's Flag" />
        <div className={classes["card-body"]}>
          <div className={classes["card-text"]}>
            <h3>{props.countryDetails.name}</h3>
            <table className={classes.table}>
              <tbody>
                <tr>
                  <td>Native Name</td>
                  <td>{props.countryDetails.nativeName}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{props.countryDetails.area}</td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>{props.countryDetails.capital}</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>{props.countryDetails.population}</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>{props.countryDetails.region}</td>
                </tr>
                <tr>
                  <td>Borders:</td>
                  <td>
                    {" "}
                    {props.countryDetails.borders.map((border, index) => (
                      <button
                        key={index}
                        className={classes.button}
                        onClick={() =>
                          props.onBorderCountryClickHandler(border)
                        }
                      >
                        {border}
                      </button>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
