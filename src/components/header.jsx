import React from "react";
import { Link } from 'react-router-dom';


function header(date) {
    let dateFormat = "";
    Object.values(date).forEach(value => {
        dateFormat += value.valueOf()
    });
    return (
        <div className="head">
            <div className="headTitle">
                <div className="headerobjectswrapper">
            <Link className="titleNotOutstanding" to={{
                pathname: '/'
            }}>

                    <header>
                        <h1>EL MUNDO TOLAI</h1>
                    </header>
            </Link> 
                </div>
            </div>
            <div className='headerBlackLine hbltop'></div>
            <div className="subheadHeader">{dateFormat}</div>
            <div className='headerBlackLine hblbottom'></div>

        </div>

    );
}


export default header;

