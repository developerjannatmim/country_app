import React from "react";
import style from "./country.module.css"
const Country = (props) => {
  
  // const props = [1, 2, 3, 4];
  // const [first, second, ...rest] = props;

  // const props = { id: 1, name: 'mim', email: 'mim@gmail.com' };
  // const { email, ...rest } = props;

  const {country} = props;
  const {name, flags, capital, population, area} = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  }
  
  return (
    <article className={style.country}>
        <div>
           <img className={style.flag} src={flags.svg} alt={name
          .common} />
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={() => {
              handleRemoveCountry(name.common)
            }}>Remove Country</button>
        </div>
    </article>
  );
};

export default Country;
