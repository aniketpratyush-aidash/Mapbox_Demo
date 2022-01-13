// import React, { useEffect, useState } from 'react';
// import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// // import parkData from './data/skateboard-parks';
// import baseurl from './apis/baseurl';
// import './index.css';

// import { Paper } from '@mui/material';

// export default function App(){
//   // const data=parkData.features;
//   const [viewport, setViewport] = useState({
//     latitude : 45.38740921020508,
//     longitude : -75.63768768310547,
//     width : "70vw",
//     height : "85vh",
//     zoom : 10
//   });
  
//   const [selectedPark,setSelectedPark] = useState(null)
//   const [parkData,setParkData]= useState();
//   // console.log(process.env.REACT_APP_MAPBOX_TOKEN);

//   useEffect (()=> {

//     const loadData = async ()=> {
//       const response = await baseurl.get('/park');
      
//       setParkData(response.data);
//     }
    
//     loadData();

//     const listener = e => {
//       if (e.key === "Escape"){
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);

//     }
//     },[]);
//   return (
//     <div style={{padding: '20px', backgroundColor: '#F0F0F0'}}>
//       <div style={{display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: 500, margin: '0px 0px 50px 0px'}}>
//           City Wise Parks Data
//       </div>

//       <div style={{display: 'flex'}}>
//       <div style={{width: '70%', padding: '10px'}}>
//       <Paper elevation={3} >
//         <div>
//           <ReactMapGL {...viewport} 
//           mapboxApiAccessToken= "pk.eyJ1IjoiYW5pa2V0LXByYXR5dXNoIiwiYSI6ImNreThiYjRlajBnenMycGxqeDMzMHV4djIifQ.lm9Y_U53ISGTbYpxOOLOBQ"
//           mapStyle="mapbox://styles/aniket-pratyush/cky8gkybo0boe14n37291h2f8"
//           onViewportChange={ viewport => {
//             setViewport(viewport)
//           }}
//           >
            

//           {parkData && parkData.map(park => (
            
            
//             <Marker key={park.PARK_ID} 
//             latitude = {parseFloat(park.latitude)}
//             longitude= {parseFloat(park.longitude)}
//             >
//               <button className="marker-btn" onClick= {(e) => {
//                 e.preventDefault();
//                 setSelectedPark(park)

//               }}>
//                 <img src="/skateboarding.svg" alt="Skate Park Icon"/>
//               </button>
//             </Marker>
//           ))}

//           {selectedPark && (
//             <Popup latitude={parseFloat(selectedPark.latitude)} 
//             longitude={parseFloat(selectedPark.longitude)}
//             onClose={() => {
//               setSelectedPark(null)
//             }}
//             >
//               <div>
//                 <h2>{selectedPark.NAME}</h2>
//                 <p>{selectedPark.DESCRIPTIO}</p>
//               </div>
//             </Popup>
//           )}

//           </ReactMapGL>


//         </div>
//       </Paper>
//       </div>

//       <div style={{width: '30%', padding: '10px 0px 0px 40px', height: '100%'}} >
        
//           <Paper elevation={1} >
//             <div style={{height: '400px', margin: '0px 0px 20px 0px', padding: '10px'}}>
//                 overview here!!!
//                 <br /> <br /> 
                
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </div>
//           </Paper>

//           <Paper elevation={1} >
//             <div style={{height: '400px', margin: '0px 0px 20px 0px', padding: '10px'}}>
//                 chart here!!!
//                 <br /> <br />
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//               </div>
//           </Paper>
        
//       </div>
      
//       </div>
//     </div>
//   )
// }
// Mayank's code
import React, { useEffect, useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// import parkData from './data/skateboard-parks';
import baseurl from './apis/baseurl';
import './index.css';

import { Paper } from '@mui/material';
import BarChart from './Charts/BarChart';

export default function App(){
  // const data=parkData.features;
  const [viewport, setViewport] = useState({
    latitude : 45.38740921020508,
    longitude : -75.63768768310547,
    width : "70vw",
    height : "85vh",
    zoom : 10
  });
  
  const [selectedPark,setSelectedPark] = useState(null)
  const [parkData,setParkData]= useState();
  // console.log(process.env.REACT_APP_MAPBOX_TOKEN);

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
                <h2>{selectedPark.NAME}</h2>
                <p>{selectedPark.DESCRIPTIO}</p>
              </div>
            </Popup>
          )}

          </ReactMapGL>


        </div>
      </Paper>
      </div>
      
      <div style={{width: '30%', padding: '10px 0px 0px 40px', height: '100%'}} >
        
          <Paper elevation={1} >
            <div style={{height: '400px', margin: '0px 0px 20px 0px', padding: '10px'}}>
                overview here!!!
                <br /> <br /> 
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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