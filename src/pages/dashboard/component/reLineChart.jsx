import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";




  const date = new Date()
  var days = [];
  for (var i = 0; i < 7; i++){
      days[i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1 + i).toDateString();
     
  }

 






const data = [
  {
    name: days[0],
    hr:55,
    min: 4300,
    amt: 2100,
  },
  {
    name:days[1] ,
    hr: 3000,
    min: 1398,
    amt: 2210,
  },
  {
    name: days[2],
    hr: 2000,
    min: 9800,
    amt: 2290,
  },
  {
    name: days[3],
    hr: 2780,
    min: 3908,
    amt: 2000,
  },
  {
    name: days[4],
    hr: 0,
    min: 4800,
    amt: 2181,
  },
  {
    name: days[5],
    hr: 2390,
    min: 3800,
    amt: 2500,
  },
  {
    name: days[6],
    hr: 3490,
    min: 4300,
    amt: 2100,
  },
];
function ReLineChart() {


  return (
    <div className=" lcc">
      <LineChart
        className="lc"
        width={800}
        height={200}
        data={data}
        margin={{ top: 5, right: 10, left: 10, bottom: 5  }}
        
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="hr" stroke="#ff7300" yAxisId={4} />
        <Line type="monotone" dataKey="min" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
}
export default ReLineChart;