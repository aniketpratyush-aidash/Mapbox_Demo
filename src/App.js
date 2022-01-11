import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import parkData from './data/skateboard-parks';
import './index.css';

import { Paper } from '@mui/material';

export default function App(){
  // const data=parkData.features;
  const [viewport, setViewport] = useState({
    latitude : 45.38740921020508,
    longitude : -75.63768768310547,
    width : "70vw",
    height : "100vh",
    zoom : 10
  });
  
  const [selectedPark,setSelectedPark] = useState(null)
  // console.log(process.env.REACT_APP_MAPBOX_TOKEN);

  useEffect (()=> {
    const listener = e => {
      if (e.key === "Escape"){
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);

    }
    },[]);
  return (
    <div style={{padding: '20px', backgroundColor: '#F0F0F0'}}>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: 500, margin: '0px 0px 50px 0px'}}>
          City Wise Parks Data
      </div>

      <div style={{display: 'flex'}}>
      <div style={{width: '70%', padding: '10px'}}>
      <Paper elevation={3} >
        <div>
          <ReactMapGL {...viewport} 
          mapboxApiAccessToken= "pk.eyJ1IjoiYW5pa2V0LXByYXR5dXNoIiwiYSI6ImNreThiYjRlajBnenMycGxqeDMzMHV4djIifQ.lm9Y_U53ISGTbYpxOOLOBQ"
          mapStyle="mapbox://styles/aniket-pratyush/cky8gkybo0boe14n37291h2f8"
          onViewportChange={ viewport => {
            setViewport(viewport)
          }}
          >
            

          {parkData.features.map(park => (
            <Marker key={park.properties.PARK_ID} 
            latitude = {park.geometry.coordinates[1]}
            longitude= {park.geometry.coordinates[0]}
            >
              <button className="marker-btn" onClick= {(e) => {
                e.preventDefault();
                setSelectedPark(park)

              }}>
                <img src="/skateboarding.svg" alt="Skate Park Icon"/>
              </button>
            </Marker>
          ))}

          {selectedPark && (
            <Popup latitude={selectedPark.geometry.coordinates[1]} 
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null)
            }}
            >
              <div>
                <h2>{selectedPark.properties.NAME}</h2>
                <p>{selectedPark.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          )}

          </ReactMapGL>


        </div>
      </Paper>
      </div>

      <div style={{width: '30%', padding: '10px 0px 0px 40px'}} >
        <div style={{height: '500px', margin: '0px 0px 20px 0px'}}>
          <Paper elevation={1} >
          chart here!!!
            asdmabsdbasndasd
            <br />
            asd
            asd
            <br />
            asd
            asd
            <br />
            navcavbvnbv
            <br />
            asdashsavdhv
            <br />
          </Paper>
        </div>

        <div style={{height: '500px', margin: '0px'}}>
          <Paper elevation={1} >
            chart here!!!
            asdmabsdbasndasd
            <br />
            asd
            asd
            <br />
            asd
            asd
            <br />
            navcavbvnbv
            <br />
            asdashsavdhv
            <br />
          </Paper>
        </div>
        
      </div>
      
      </div>
    </div>
  )
}