import React from "react";
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';
import Newspaper from '../newspp.gif'



function detail_header(){
    return (
        <div className="detailHeader">
             <Link className="detailHeaderLink" to={{
                pathname: '/'            }}>
            <h1 className="detailHeaderEMT">EMT</h1>
            </Link>
            <div className="newspaperGifdiv">
            <img className="newspaperGif" src={Newspaper} alt='fresh!!' />
                </div>
            <div className="detailHeaderClock">
            <Clock  format={'HH:mm:ss'} ticking={true} timezone={'CET'} />
            </div>

        </div>

    );

}
export default detail_header;