import React from "react";
import axios from "axios";
import Article from "./articleCategoryInSectionGrid";
import loadingGif from '../loading.gif';
import url from "../backend";


class PrincipalCategory extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          content : []
        }
        this.url =  url.getCategory;
        var index = window.location.href.lastIndexOf("/");
        this.id =window.location.href.substring(index + 1, window.location.href.length);
       
        
        this.getRelated();
    
    }
    async getRelated(){
        let cont = await axios.get(this.url + this.id);
        if (Array.isArray(cont.data.articles)){
            let arts = [];
            cont.data.articles.map(a => {
                if ( a !== null ){
                    arts.push(a);
                }
                return (  
                this.setState({
                    content :arts,
            }
            ));
        });
        }
       
    }

    
    render(){
        if(this.state.content.length === 0){
        return(
            <div><img src={loadingGif} alt='now loading' /></div>
        );
        } else {
            return (
                <div className="outstandingNew">
                    {this.state.content.map((a,k) =><Article key={k} {...a} ></Article>)}
                </div>

            );
        }
    }

}
export default PrincipalCategory;