
import {useState,useEffect} from 'react'
import axios from 'axios'
import './getdataLoc.css'
import './aq_index.json'



const Getdata =  () => {



  const TOKEN = "ed34834cd666ba4bbd44a9c7d6cbc51b371fa443"
  const [responseData,setResponseData]=useState({"alldata": null,"city":"turn on location and reload!","aqi" :"AQI","location" :null,"Airlevel":"Air Quality",
  "alert":"Health Implications",
  "alert_tip":"Cautionary Statement (for PM2.5)",
  "color_bg":"white",
  "dark_color":"white",
  "mid_color":"white"});
  const [,setGeo]=useState({"latitude":null,"longitude":null,"status":null})
  // begging for location permission




// json helper
const getdata =(aqi)=>{
  const data = require('./aq_index.json');
  // console.log(aqi,"here")
  for(var x in data){
    if(data[x].from<=aqi && data[x].to >=aqi)
      return(data[x])
  }
}




// api request 
  const fetchdata = ()=>{
    if(navigator.geolocation)
        {
          navigator.geolocation.getCurrentPosition( function(position){

            // console.log(position)
            const urlLoctation = `https://api.waqi.info/feed/geo:${position.coords.latitude};${position.coords.longitude}/?token=${TOKEN}`;
            axios.get(urlLoctation).then(res=>{
              // console.log("location script")
              const temp =res.data.data
              const ex_data=getdata(temp.aqi)
              document.body.style.background=ex_data.colorbg
              const jsondata ={"alldata": temp,
                              "city":temp.city.name,
                                "aqi" :temp.aqi,
                                "location_co" :temp.city.geo,
                                "acctime":temp.time.s,
                                "Airlevel":ex_data.Air_pollution_level,
                                "alert":ex_data.Health_Implications,
                                "alert_tip":ex_data.PM25,
                                "color_bg":ex_data.colorbg,
                                "dark_color":ex_data.dark_color,
                                "mid_color":ex_data.mid_color,
                              }
            return jsondata
            }).then((jsondata)=>{
              setResponseData(jsondata)
              setGeo({"latitude":position.coords.latitude,"longitude":position.coords.longitude,"status":true})
              // console.log(geoL)
            }).catch(error=>{
              // console.log(error)
            })
          })
      }
    else{
      setGeo({"latitude":null,"longitude":null,"status":false})
    }
  }




  useEffect(()=>{
  // other code
    fetchdata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="container center">
        <div className="location-name center">
          <div className="city-name"><i className="material-icons">near_me</i> {responseData.city}</div>
        </div>

            <div className="aqindex">{responseData.aqi}</div>
            <div className="air_p_level">{responseData.Airlevel}</div>


            <div className="line center" style={{"backgroundColor":responseData.mid_color}} ></div>

            <div className="row">
              <div className="col s4"><i className=" material-icons icons" style={{"color":responseData.dark_color}}>warning</i></div>
                <div className="col s8">
                  <p className="flow-text tips" >{responseData.alert}</p>
                </div>
            </div>

            <div className="row">
              <div className="col s4"><i className="rotate material-icons icons" style={{"color":responseData.dark_color}} >wb_incandescent</i></div>
                <div className="col s8">
                  <p className="flow-text tips" >{responseData.alert_tip}</p>
                </div>
            </div>


            <div className="line center" style={{"backgroundColor":responseData.mid_color}}></div>

        <div className="time_iso">Last Updated {new Date(responseData.acctime).toDateString()} {new Date(responseData.acctime).toLocaleTimeString()}</div>
         {/* <h2>aqi location {JSON.stringify(responseData)}</h2> */}

    </div>

   );
}

export default Getdata;

