
import {useState,useEffect} from 'react'
import axios from 'axios'


const Getdata = () => {
  const url = "https://api.waqi.info/feed/here/?token="+TOKEN;
  
  const [responseData,setResponseData]=useState('');
  const [geoL,setGeo]=useState({"latitude":null,"longitude":null,"getting":false})

  const fetchdata = ()=>{
    // get location

    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position)
      setGeo({"latitude":position.coords.latitude,"longitude":position.coords.longitude,"getting":true})
    })
    // axios request 
    axios.get(url)
    .then(res=>{

      const urlLoctation = `https://api.waqi.info/feed/geo:${geoL.latitude};${geoL.longitude}/?token=${TOKEN}`;
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
        console.log(geoL.longitude,geoL.latitude)
        console.log(urlLoctation)

        axios.get(urlLoctation).then(res=>{
          console.log("location script")
          const temp =res.data.data
          const jsondata ={"data": temp,
                          "city":temp.city,
                            "aqi" :temp.aqi,
                            "location" :temp.city
                          }
        setResponseData(jsondata)

        }).catch(error =>{
          console.log("normal")
        // const temp =res.data.data
        // const jsondata ={"data": temp,
        //                 "city":temp.city.name,
        //                   "aqi" :temp.aqi,
        //                   "location" :temp.city.geo
        //                 }
        // setResponseData(jsondata)
        console.log(error)
      })


      
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(()=>{fetchdata()},[])
  // fetchdata()

  return ( 

    <ul>
      <h1>{responseData.aqi} AQI</h1>
      <h1>{JSON.stringify(responseData.city)}</h1>
      <h1>{responseData.location}</h1>
      <h1>{JSON.stringify(geoL.getting)}</h1>
      <h1>{JSON.stringify(geoL.latitude)}</h1>
      <h1>{JSON.stringify(geoL.longitude)}</h1>

    </ul>
   );
}
 
export default Getdata;


