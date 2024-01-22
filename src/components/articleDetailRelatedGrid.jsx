import { CardGroup } from 'react-bootstrap';
import Card from '../components/articleDetailRelated';

function grid(props) {
    let arrArt = Object.values(props);
    let resultFiltered=[];
    for (let register of arrArt) {
        if (typeof register === 'object') {
            let newArt = {
                author_id: register.author_id,
                createdAt: register.createdAt,
                id : register.id, 
                main_text: register.main_text,
                outstanding:register.outstanding,
                title:register.title,
                updatedAt:register.updatedAt,
                history:[]
            }
            
            resultFiltered.push(newArt);
        }
    }
    //tratar las fechas
    return (
        <div>
        <h2 className='retaledH2'>Relacionados</h2>
        <CardGroup>
            {resultFiltered.map((a ,k) => <Card{...a}  key ={k} ></Card>)}
        </CardGroup>
        </div>
    );

}
export default grid;