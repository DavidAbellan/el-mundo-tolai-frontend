import {Link} from 'react-router-dom';
function Header (props) {
    return (
        <div className="columnHeader">
             <Link to={{
            pathname: "/"
          }}>
            <h2>El Mundo Tolai </h2>
            <p>{props.name}</p>
            </Link>
        </div>
    )

}
export default Header;