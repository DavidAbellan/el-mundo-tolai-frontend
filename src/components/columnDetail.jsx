import React from "react";
import axios from "axios";
import Header from "./columnDetailHeader";
import Grid from "./articleDetailRelatedGrid";
import Footer from "./footer";
import url from "../backend"
class ColumnDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            author: "",
            column: "",
            authorPhoto: "",
            related: [],
            authors: []
        };
        this.url = url.column;
        var index = window.location.href.lastIndexOf("/");
        this.id = window.location.href.substring(index + 1, window.location.href.length);

        this.getCol();
    }

    render() {
        if (this.state.content == null) {
            return (
                <div>
                    <h1>cargando...</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <Header></Header>
                    <div className="columnAuthorHeader">

                        <div className="columnAuthor" >
                            <h1>{this.state.author.name}</h1>
                            <p>{this.state.author.username} </p>
                        </div>
                        <div className="columnTitle">
                            <h1 className="title">{this.state.column.title}</h1>
                            <p>{this.state.column.highlights} </p>
                        </div>
                        <div className="textBlock">
                            <div>
                                <p className="textBody">{this.state.column.main_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="headerBlackLine hbltop"></div>

                    <div className="articleBottom">
                        <img className="photoFootAuthor" alt={this.state.author.username} src={this.state.authorPhoto.path}  ></img>
                        <div className="articleBottomText">

                            <h1>{this.state.author.name}</h1>
                            <p>{this.state.author.description}</p>
                        </div>
                    </div>
                    <div className="headerBlackLine hblbottom"></div>
                    <div>
                        <Grid {...this.state.related}></Grid>
                    </div>
                    <div>
                        <Footer {...this.state.authors}></Footer>
                    </div>


                </div>

            );
        }
    }

    async getCol() {
        let content = await axios.get(this.url + this.id);
        let related = await axios.get(this.url + "allfrom/" + content.data.author.id);
        let authors = await axios.get(url.getAllAuthors);

        this.setState({
            content: content.data,
            author: content.data.author,
            column: content.data.column,
            authorPhoto: content.data.authorPhoto,
            related: related.data.colums,
            authors: authors.data.authors
        })




    }
}
export default ColumnDetail;
