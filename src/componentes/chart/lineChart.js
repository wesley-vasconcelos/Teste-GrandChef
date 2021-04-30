import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Abr3", "Abr4", "Abr5", "Abr6", "Abr7", "Abr8", "Abr9"],
  datasets: [
    {
      label: "",
      data: [100, 200, 150, 200, 300, 200, 400],
      borderColor: "#e17012",
      fill: false,
    },
  
  ]
};

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
};

  

export default function Chart() {
    
  return (
    <div style={{textAlign:'left', fontSize:'18px', fontWeight:'bold'}} className="App">
        <p>Faturamento diário</p>
      <Line data={data} options={options} />
    </div>
  );
}
