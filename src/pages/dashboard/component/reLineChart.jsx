import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";



function getCurrentAndFutureDays() {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  var currentDayString = daysOfWeek[currentDay];

  var futureDays = [];
  for (var i = 1; i <= 7; i++) {
    var futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + i);
    var futureDay = futureDate.getDay();
    var futureDayString = daysOfWeek[futureDay];
    futureDays.push(futureDayString);
  }

  return {
    currentDay: currentDayString,
    futureDays: futureDays,
    currentDate
  };
}
var days = getCurrentAndFutureDays();






  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  // Format single-digit values with leading zeros
  var formattedHours = hours.toString().padStart(2, '0');
  var formattedMinutes = minutes.toString().padStart(2, '0');
  var formattedSeconds = seconds.toString().padStart(2, '0');

  console.log('Current time:', formattedHours + ':' + formattedMinutes + ':' + formattedSeconds);


// Schedule to call getCurrentTime every 5 minutes



var pointer = days.currentDate.getSeconds() * 100;



  const data = [
    {
      name:days.currentDay,
      hr:formattedHours / pointer.toFixed(2),
      min:formattedMinutes,
      amt: formattedSeconds,
    },
    {
      name:days.futureDays[0],
      hr: formattedHours/100 * 24,
      min: 0,
      amt: 0,
    },
    {
      name: days.futureDays[1],
      hr: 0,
      min: 0,
      amt: 0,
    },
    {
      name: days.futureDays[2],
      hr: 0,
      min: 0,
      amt: 0,
    },
    {
      name:days.futureDays[3],
      hr: 0,
      min: 0,
      amt: 0,
    },
    {
      name: days.futureDays[4],
      hr: 0,
      min: 0,
      amt: 0,
    },
    {
      name:days.futureDays[5],
      hr: 0,
      min: 0,
      amt: 0,
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
