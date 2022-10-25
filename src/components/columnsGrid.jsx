import Thanks from "../thanks.gif";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function ColumnGrid(props) {
    let columns = Object.values(props);
    if (props) {
        return (
            <div>
                {columns.map((a, k) => {
                    let id = a.id;
                    let path = "/col/" + id;
                    return (
                        <Card key={k}>
                            <Card.Header as="h5">
                            <Link to={{
                                      pathname: path,
                                      query: { id }
                              }}>
                                ver mas...
                                </Link>
                                </Card.Header>
                            <Card.Body>
                                <Card.Title>{a.title}</Card.Title>
                                <Card.Text>
                                    {a.highlights}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
                <img className="newspaperGif" src={Thanks} alt='Thank You!!' />

            </div>
        );
    } else {
        return (
            <img className="newspaperGif" src={Thanks} alt='Than You!!' />
        );

    }
}
export default ColumnGrid;