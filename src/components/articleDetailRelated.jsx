import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardOfGrid(props) {
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const dias_semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let path;
    let fecha = new Date(props.updatedAt);
    let date = String(dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getUTCFullYear());
    let id = props.id
    if (!props.highlights ) {
        path = '/art/' + id;
    } else {
        path = '/col/' + id;
    }
    let text = "**El Mundo Tolai reservado**";
    if (props.main_text !== undefined) {
        text = props.main_text.substring(0, 100) + "...";
    }
    return (
        <div className='articleDetailRelated'>
            <Link onClick={()=>props.history.push(id)}  to={{
            pathname: path,
            query: { id }
          }}>
                <h5 className='articleDetailRelatedLabel'>{props.title}</h5>
              </Link>
                <p>
                    {text}
                </p>
                <p>
                    {date}
                </p>
           
        </div>
    );

}
export default CardOfGrid;
