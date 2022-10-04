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
        <Card>
            <Card.Body>
            <Link onClick={()=>props.history.push(id)}  to={{
            pathname: path,
            query: { id }
          }}>
                <Card.Title>{props.title}</Card.Title>
              </Link>
                <Card.Text>
                    {text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{date}</small>
            </Card.Footer>
        </Card>
    );

}
export default CardOfGrid;
