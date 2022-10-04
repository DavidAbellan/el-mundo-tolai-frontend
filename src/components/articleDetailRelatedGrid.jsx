import { CardGroup } from 'react-bootstrap';
import Card from '../components/articleDetailRelated';

function grid(props) {
    let arrArt = Object.values(props);
    //tratar las fechas
    return (
        <div>
        <h2>Relacionados</h2>
        <CardGroup>
            {arrArt.map((a ,k) => <Card{...a}  key ={k} ></Card>)}
        </CardGroup>
        </div>
    );

}
export default grid;