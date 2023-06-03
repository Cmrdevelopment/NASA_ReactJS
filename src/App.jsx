// importamos los archivos necesario para que nos funcione nuestra web
import { useState, useEffect } from "react";
import Figure from "./components/figure/Figure";
import axios from "axios";
import "./App.css";

const App = () => {
  // Obtenemos la fecha y la guardamos en today, recibimos los datos con los 10 caracteres de la fecha "AAAA-MM-DD"
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  // useState crea un valor (estado) cuyo valor inicial es apod y lo cambia setApod
  const [apod, setApod] = useState({});
  // useState crea un valor (estado) cuyo valor inicial es date y lo cambia setDate
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "hwxeHOhb2uHTbyzru7vzevCbon5VB3dVyjqYACZP";
  // Función que representa el evento de entrada almacenando el día que queremos observar
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };
  // useEffect lo utilizamos para llamar a la api y al ser extena, la api, debemos utilizar el useEffect
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
        NASA API {/* logo y titulo de la página (nasa) */}
        <img
          src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1685725002/NASA_logo.svg_c16krg.png"
          className="logo"
          alt="NASA LOGO"
        />
      </h2>
      {/* Pintamos titulo y el input de entrada de la fecha a elegir y cuando se cambie el día se ejecuta la función handleInput   */}
      <h1>Foto astronomia del dia seleccionado</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
        <h2>Please choose a previous date</h2>
      ) : (
        // Se ejecuta la función figure para que se rendenderice la foto del día elegido
        <Figure data={apod} />
      )}
      {/* pie de página con la url de la api.nasa */}
      <div className="standard-dialog center">
        <h1 className="dialog-text">
          @cmrbolsa - 2023 -{" "}
          <a href="https://api.nasa.gov/" Target="_blank">
            https://api.nasa.gov/
          </a>
        </h1>
      </div>
    </div>
  );
};

export default App;
