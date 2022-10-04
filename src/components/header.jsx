import React from "react";
import { Link } from 'react-router-dom';


function header(date) {
    let dateFormat = "";
    Object.values(date).forEach(value => {
        dateFormat += value.valueOf()
    });
    return (
        <div className="head">
            <Link className="titleNotOutstanding" to={{
                pathname: '/'
            }}>
                <div className="headerobjectswrapper">

                    <header>El Mundo Tolai</header>
                </div>
            </Link>

            <div className="subheadHeader">{dateFormat}</div>
            <br></br>
        </div>

    );
}


export default header;

