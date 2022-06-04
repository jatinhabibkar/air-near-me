import "../styles/getdataLoc.css";
import BarLine from "./barline";
import { PM25Type } from "../types";

const CreateGraph = (props:{
  gdata:PM25Type[]
}) => {
  var gdata = props.gdata;

  return (
    <div>
      <div className="flexBox">
        {gdata.map((item, i) => (
          <BarLine
            number={item["avg"]}
            date={item["day"]}
            max={item["max"]}
            min={item["min"]}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateGraph;
