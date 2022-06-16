import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/getdataLoc.css";
import datafile from "./aq_index.json";
import CreateGraph from "./CreateGraph";
import { InfoPage } from "./InfoPage";
import Spinner from "./Spinner";
import { DataFileType, JsonDataType, OptionsType, GeoJsonDispatch, GeoLoadingDispatch } from "../types";


// json helper
export const getdata = (aqi: number): DataFileType | undefined => {
  const data: DataFileType[] = datafile;
  for (var x in data) {
    if (data[x].from <= aqi && data[x].to >= aqi) return data[x];
  }
};


const Home = ({ setGeo, loading, setLoading }: { setGeo: GeoJsonDispatch, loading: boolean, setLoading: GeoLoadingDispatch }) => {

  const TOKEN = process.env.REACT_APP_AQI_API_KEY;
  const [info, setpage] = useState({
    info: false
  })
  const [responseData, setResponseData] = useState<JsonDataType>({
    city: " Air center near me  ",
    aqi: "AQI",
    acctime: '',
    location: null,
    Airlevel: "Air Quality",
    alert: "Health Implications",
    alert_tip: "Cautionary Statement (for PM2.5)",
    color_bg: "white",
    dark_color: "white",
    mid_color: "white",
    pm25average: [],
  });


  // api request
  const fetchdata = () => {

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        // console.log(position)
        const urlLoctation = `https://api.waqi.info/feed/geo:${position.coords.latitude};${position.coords.longitude}/?token=${TOKEN}`;
        axios
          .get(urlLoctation)
          .then((res) => {
            const { data: temp } = res.data;
            // fetch info from json
            const ex_data = getdata(temp.aqi);
            // change whole body color background
            document.body.style.background = ex_data!.colorbg;
            // graph data
            const { pm25: pm25average } = temp.forecast.daily;
            const jsondata: JsonDataType = {
              city: temp.city.name,
              aqi: temp.aqi,
              location: temp.city.geo,
              acctime: temp.time.s,
              Airlevel: ex_data!.Air_pollution_level,
              alert: ex_data!.Health_Implications,
              alert_tip: ex_data!.PM25,
              color_bg: ex_data!.colorbg,
              dark_color: ex_data!.dark_color,
              mid_color: ex_data!.mid_color,
              pm25average,
            };
            setResponseData(jsondata);
            setLoading(false)
          })
          .catch(() => {
            setResponseData({
              ...responseData,
              city: "server issue try again later"
            })
            setLoading(false)
          });

      });
    } else {
      setGeo({ latitude: null, longitude: null, status: false });
    }
  };

  const ChangePage = () => setpage({ "info": !info.info })

  useEffect(() => {

    fetchdata();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (info.info) {
    return <InfoPage ChangePage={ChangePage} />
  } else {
    return (
      <div className="container center">
        
        <div className="location-name center">
          <div className="city-name">
            {loading ? <Spinner /> : <i className="material-icons">near_me</i>}{responseData.city}
          </div>
        </div>

        <div className="aqindex" onClick={ChangePage}>
          {responseData.aqi}
          <span style={{ marginLeft: "-20px" }}>
            {" "}
            {loading}
            <i className="material-icons">info_outline</i>
          </span>
        </div>
        <div className="air_p_level">{responseData.Airlevel}</div>

        <div
          className="line center"
          style={{ backgroundColor: responseData.mid_color }}
        ></div>

        <div className="row">
          <div className="col s4">
            <i
              className=" material-icons icons"
              style={{ color: responseData.dark_color }}
            >
              warning
            </i>
          </div>
          <div className="col s8">
            <p className="flow-text tips">{responseData.alert}</p>
          </div>
        </div>

        <div className="row">
          <div className="col s4">
            <i
              className="rotate material-icons icons"
              style={{ color: responseData.dark_color }}
            >
              wb_incandescent
            </i>
          </div>
          <div className="col s8">
            <p className="flow-text tips">{responseData.alert_tip}</p>
          </div>
        </div>
        <CreateGraph gdata={responseData.pm25average} />
        <p>Average particulate pollutant level </p>

        <div
          className="line center"
          style={{ backgroundColor: responseData.mid_color }}
        ></div>

        {!loading && responseData.acctime && <div className="time_iso">
          Last Updated <br />{new Date(responseData.acctime).toLocaleTimeString("en-us", options)}
        </div>}
      </div>
    );
  }
};



const options: OptionsType = {
  weekday: "short", year: "numeric", month: "short",
  day: "numeric", hour: "2-digit", minute: "2-digit"
};

export default Home;
