import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [days, setdays] = useState("00");
  const [hours, sethours] = useState("00");
  const [minutes, setminutes] = useState("00");
  const [seconds, setseconds] = useState("00");

  let interval = useRef();

  const startimer = () => {
    const coutdown = new Date("October 13, 2021 00:00:00");

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coutdown - now;

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
      } else {
        setdays(Days);
        sethours(Hours);
        setminutes(Minutes);
        setseconds(Seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="App">
      <h1 className="heading">Sugary Cupcake's Birthday Coutdown</h1>
      <div id="clockdiv">
  <div>
    <span class="days">{days}</span>
    <div class="smalltext">Days</div>
  </div>
  <div>
    <span class="hours">{hours}</span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes">{minutes}</span>
    <div class="smalltext">Minutes</div>
  </div>
  <div>
    <span class="seconds">{seconds}</span>
    <div class="smalltext">Seconds</div>
  </div>
</div>

    </div>
  );
}

export default App;
