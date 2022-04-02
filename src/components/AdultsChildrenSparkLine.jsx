import React, { useState } from "react";
import { data } from "../data/data";
import Chart from "react-apexcharts";
import Selects from "./Select";
import Button from "@mui/material/Button";
import Heading from "./Heading";

const SparkLineAdultChildren = () => {
  const [list, setList] = useState(data);
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(31);

  const day = [...new Set(list.map((item) => item.arrival_date_day_of_month))];
  const childrens = day.map((item) =>
    list
      .filter((filters) => filters.arrival_date_day_of_month === item)
      .reduce((acc, curr) => {
        return acc + curr.children;
      }, 0)
  );
  const adults = day.map((item) =>
    list
      .filter((filters) => filters.arrival_date_day_of_month === item)
      .reduce((acc, curr) => {
        return acc + curr.adults;
      }, 0)
  );

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: day,
    },
  };
  const series = [
    {
      name: "adults",
      data: adults,
    },
    {
      name: "childrens",
      data: childrens,
    },
  ];
  const startDateChange = (e) => {
    setStart(e.target.value);
  };
  const endDateChange = (e) => {
    setEnd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(start, end);
    setList(
      data.filter(
        (date) =>
          date.arrival_date_day_of_month >= start &&
          date.arrival_date_day_of_month <= end
      )
    );
  };
  return (
    <div className="graph-indiv">
      <Heading heading="No. of Adults and Childrens visiting per day" />
      <form onSubmit={handleSubmit}>
        <Selects
          id="start-date"
          label="Start Date"
          defaultValue={start}
          onChange={startDateChange}
        />
        <Selects
          id="end-date"
          defaultValue={end}
          label="End Date"
          onChange={endDateChange}
        />
        <Button variant="contained" type="submit">
          Filter
        </Button>
      </form>
      <Chart options={options} series={series} type="line" width="100%" />
    </div>
  );
};

export default SparkLineAdultChildren;
