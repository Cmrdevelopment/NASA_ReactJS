import "./Figure.css";

const Figure = ({ data }) => {
  return (
    <figure>
      {/* url de la imagen en el api.nasa para que al buscar se represente */}
      <img src={data.url} alt={data.title} />
      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          {/* titulo que sale debajo de la foto */}
          <h1 className="title">{data.title}</h1>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="details-bar">
          {/* Dia y copyright de la foto antes de la descripción */}
          <span>{data.date}</span>
          <span>{data.copyright}</span>
        </div>
        {/* descripción de la foto del día elegido */}
        <div className="window-pane">{data.explanation}</div>
      </div>
    </figure>
  );
};

export default Figure;
