import { useState, useEffect } from "react";
import Figure from "./components/figure/Figure";
import axios from "axios";
import "./App.css";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "hwxeHOhb2uHTbyzru7vzevCbon5VB3dVyjqYACZP";
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  return (
    <div className="App">
      <h2 className="title">
        NASA API{" "}
        <img
          src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1685725002/NASA_logo.svg_c16krg.png"
          className="logo"
          alt="NASA LOGO"
        />
      </h2>
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        <Figure data={apod} />
      )}
      <div className="standard-dialog center">
        <h1 className="dialog-text">
          @cmrbolsa - 2023 -{" "}
          <a href="https://api.nasa.gov/">https://api.nasa.gov/</a>
        </h1>
      </div>
    </div>
  );
};

export default App;
