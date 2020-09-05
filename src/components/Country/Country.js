import React from "react";

const Country = (props) => {
  const {
    name,
    population,
    region,
    capital,
    area,
    curencies,
    border,
    flag,
  } = props.country;
  console.log(props);

  const flagStyle = { height: "50px" };
  const countryStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
  };
  const handleAddCountry = props.handleAddCountry;

  return (
    <div style={countryStyle}>
      <h4>This is {name} </h4>
      <img style={flagStyle} src={flag} alt="" />
      <p>Capital: {capital}</p>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Area: {area} sqm</p>
      <p>Population: {population}</p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country{" "}
      </button>
    </div>
  );
};

export default Country;
