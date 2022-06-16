import React from "react";
import "../styles/getdataLoc.css";

type BarLineProps = {
  min: number;
  max: number;
  number: number;
  date: string;
}

const BarLine = (props: BarLineProps) => {
  function getDayNow(date: string) {
    let arrayOfWeekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let data = new Date(date);
    let today = new Date();
    return <div className="date" style={data.getDate() === today.getDate() ? { color: "black" } : {}}>{arrayOfWeekdays[data.getDay()]}</div>;
  }

  return (
    <React.Fragment>
      <div className="item">
        <div
          className="barline"
          title={props.min + "-" + props.max}
          style={{ height: props.number < 201 ? props.number : 200 }}
        ></div>
        <div className="number">{props.number}</div>
        {getDayNow(props.date)}
      </div>
    </React.Fragment>
  );
};

export default BarLine;
