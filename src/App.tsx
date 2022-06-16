import './styles/App.css';
import Home from './components/Home';
import { useEffect, useState } from "react";
import { Geojson } from './types';

function App() {

  const [Geo, setGeo] = useState<Geojson>({
    latitude: null,
    longitude: null,
    status: null,
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [alert, setAlert] = useState<string | null>();


  const askLocation = () => {
    navigator.geolocation.watchPosition(
      function (position) {
        setGeo({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          status: true,
        });
        setAlert(null)
      },
      function (error) {
        if (error.code === error.PERMISSION_DENIED)
          setAlert("click below to give location access");
        else {
          setAlert(null)
        }
      }
    );
  }

  useEffect(() => {
    askLocation();
    setLoading(true)

  }, []);

  if (Geo.status === null) {
    return (
      <div className="App">
        <div className="content" style={{ marginTop: "15vh", padding: "10px" }}>
          <div className="container center" >
            <h3>Let me check the nearest Air quality Center</h3>
            {alert && <p>{alert}</p>}

            <a
              href="/"
              className="waves-effect waves-light btn white black-text "
              onClick={(e) => {
                e.preventDefault()
                askLocation()
              }}
            >
              <i className="material-icons" style={{ verticalAlign: "bottom" }}>
                location_on
              </i>
              {" Turn on location"}
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="content">
        <Home setGeo={setGeo} loading={loading} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default App;

