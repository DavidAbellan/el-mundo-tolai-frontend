import React from "react";

function CardOfGrid(props) {
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const fecha = new Date(props.updatedAt);
  const date = String(dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
  const id = props.id;

  let path;
  if (!props.highlights) {
    path = '/art/' + id;
  } else {
    path = '/col/' + id;
  }

  let text = "**El Mundo Tolai reservado**";
  if (props.main_text !== undefined) {
    text = props.main_text.substring(0, 100) + "...";
  }

  const redirectTo = () => {
    window.location.href = path;
  };

  if (!props.id) {
    return (
      <div><p>Cargando...</p></div>
    );
  } else {
    return (
      <div className='articleDetailRelated'>
        <div onClick={redirectTo} style={{ cursor: 'pointer' }}>
          <h5 className='articleDetailRelatedLabel'>{props.title}</h5>
        </div>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    );
  }
}

export default CardOfGrid;
