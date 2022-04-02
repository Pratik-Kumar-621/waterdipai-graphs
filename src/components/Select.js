import React from "react";
import { data } from "../data/data";

const Selects = (props) => {
  const day = [...new Set(data.map((item) => item.arrival_date_day_of_month))];
  return (
    <div className="select">
      <label htmlFor={props.id}>{props.label} :&nbsp;&nbsp;</label>
      <select
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      >
        {day.map((days) => {
          return <option value={days}>{days}</option>;
        })}
      </select>
    </div>
  );
};

export default Selects;
