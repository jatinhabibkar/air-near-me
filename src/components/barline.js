import React from "react";
import "./getdataLoc.css";

const BarLine = (props) => {
  function getDayNow(date) {
    var arrayOfWeekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    var data = new Date(date);
    var today = new Date();
    if (data.getDate() === today.getDate()) {
      return (
        <div className="date" style={{ color: "black" }}>
          {arrayOfWeekdays[data.getDay()]}
        </div>
      );
    }
    return <div className="date">{arrayOfWeekdays[data.getDay()]}</div>;
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
