import React, { useState, useEffect } from 'react'

import {
  Chart as ChartJS,

  BarElement,

} from 'chart.js';
import {CategoryScale} from 'chart.js';
import {LinearScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import baseurl from '../apis/baseurl';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
);


const BarChart = () => {
  const [parkData,setParkData]= useState();  
    
    useEffect (()=> {
        
        const loadData = async ()=> {
          const response = await baseurl.get('/park');
          console.log(response.data);
          setParkData(response.data);
        }
        
        loadData();
        
        // const listener = e => {
        //   if (e.key === "Escape"){
            
        //   }
        // };
        // window.addEventListener("keydown", listener);
    
        // return () => {
        //   window.removeEventListener("keydown", listener);
    
        // }
        },[]);

        
  var data = {
    labels: parkData?.map(x => x.name),
    datasets: [{
      label: `${parkData?.length} Coins Available`,
      data: parkData?.map(x => x.max_strength),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Bar
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default BarChart