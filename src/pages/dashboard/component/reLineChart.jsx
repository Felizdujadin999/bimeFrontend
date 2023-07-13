import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";




var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date(); 
const day = date.getDay();

const data = [
  {
    name: days[day],
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name:days[date.getDay()+1] ,
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: days[date.getDay()+2],
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: days[day+2],
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Friday",
    uv: 0,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Saturday",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sunday",
    uv: 3490,
    pv: 4300,
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
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
}
export default ReLineChart;