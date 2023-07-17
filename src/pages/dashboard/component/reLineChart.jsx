import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";

const date = new Date();
const dateOptions = {
  timeZone: "UTC",
  day: "numeric",

};


const data = [
  {
    name: date.toLocaleDateString("en-US", dateOptions),
    hr: date.getHours(),
    min:date.getMinutes(),
    amt: 2100,
  },
  {
    name:'',
    hr: 3,
    min: 18,
    amt: 2210,
  },
  {
    name: '',
    hr: 8,
    min: 0,
    amt: 2290,
  },
  {
    name: '',
    hr: 1,
    min: 54,
    amt: 2000,
  },
  {
    name: '',
    hr: 0,
    min: 4,
    amt: 2181,
  },
  {
    name: '',
    hr: 2,
    min: 38,
    amt: 2500,
  },
  {
    name:'',
    hr: 13,
    min: 43,
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
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="hr" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="min" stroke="#387908" yAxisId={1} />
      </LineChart>
    </div>
  );
}
export default ReLineChart;
