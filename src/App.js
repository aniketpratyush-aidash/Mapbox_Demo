import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// import parkData from './data/skateboard-parks';
import baseurl from './apis/baseurl';
import './index.css';

import { Paper } from '@mui/material';
import BarChart from './Charts/BarChart';

export default function App(){

  const [viewport, setViewport] = useState({
    latitude : 45.38740921020508,
    longitude : -75.63768768310547,
    width : "70vw",
    height : "85vh",
    zoom : 10
  });
  
  const [selectedPark,setSelectedPark] = useState(null)
  const [parkData,setParkData]= useState([]);
  
  // console.log(process.env.REACT_APP_MAPBOX_TOKEN);
  
  const calculateAverageNoOfGates = ()=> {
    const noOfParks=parkData.length;
    var totalNoOfGates=0;
    for(var i=0;i<noOfParks;i++){
      totalNoOfGates+= parseInt(parkData[i]['no_of_gates']);
    }
    const averageNoOfGates= Math.floor(totalNoOfGates/noOfParks);
    return averageNoOfGates;
  }

  const calculateAverageStrength = ()=> {
    const noOfParks=parkData.length;
    var totalStrength= 0;
    for(var i=0;i<noOfParks;i++){
      totalStrength+= parseInt(parkData[i]['max_strength']);
    }
    const averageStrength= Math.floor(totalStrength/noOfParks);
    
    return averageStrength;
  }

  const calculateAverageNoOfTrees = ()=> {
    return 18;
  }


  useEffect (()=> {

    const loadData = async ()=> {
      const response = await baseurl.get('/park');
      setParkData(response.data);
    
    }
    
    loadData();
    
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
      
          {parkData && parkData.map(park => (
      
            
            <Marker key={park.PARK_ID} 
            latitude = {parseFloat(park.latitude)}
            longitude= {parseFloat(park.longitude)}
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
        
            <Popup latitude={parseFloat(selectedPark.latitude)} 
            longitude={parseFloat(selectedPark.longitude)}
            onClose={() => {
              setSelectedPark(null)
            }}
            >
              <div>
                <h2>{selectedPark.name}</h2>
                <p>{selectedPark.descriptio}</p>
              </div>
            </Popup>
          )}

          </ReactMapGL>


        </div>
      </Paper>
      </div>
      
      <div style={{width: '30%', padding: '10px 0px 0px 40px', height: '100%'}} >
        
          <Paper elevation={1} >
            <div style={{height: '250px', margin: '0px 0px 20px 0px', padding: '10px'}}>
                <h3>Overview of Parks </h3>
                
                <div><b>Total No. of Parks : </b> {parkData.length}</div>
                <br></br>
                <div><b>Average Strength of a Park :</b> {parkData && calculateAverageStrength()}</div>
                <br></br>
                <div><b>Average No. of Gates in a Park : </b>{parkData && calculateAverageNoOfGates()} </div>
                <br></br>
                <div><b>Average No. of Trees in a Park : </b>{parkData && calculateAverageNoOfTrees()} </div>
              </div>
          </Paper>

          <Paper elevation={1} >
            <div id="mychart" style={{height: '400px', margin: '0px 0px 20px 0px', padding: '10px'}}>
            

            <BarChart />
                
                
              </div>
          </Paper>
        
      </div>
      
      </div>
    </div>
  )
}