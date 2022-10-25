import React from "react";
import axios from 'axios';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import url from "../backend";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      name: ""
    }
    this.get_results = this.get_results.bind(this);
  }
  async get_results(event) {
    this.setState({
      name: event.target.value
    });
    let content = await axios.get(url.principal + "search/" + this.state.name);

    this.setState({
      result: content
    })

  }
  render() {
    if (this.state.name.length > 3) {
      return (
        <div>
          <input type='text' className="searchTextBox" value={this.state.name} onChange={this.get_results}></input>
          <MyModalWithGrid {...this.state.result.data.articles}></MyModalWithGrid></div>
      );
    } else {
      return (
        <div>
          <input type='text' value={this.state.name} onChange={this.get_results}></input>
        </div>
      );
    }
  }
};
function MyModalWithGrid(props) {
  let arrayProps = Object.values(props);
  let newProps = [];
  for (let i = 0; i < arrayProps.length; i++) {
    newProps.push(arrayProps[i]);
  }
  return (
    <div className="floatDiv">
      {newProps.map((a, k) => 
        {
        let id = a.id;
        let path;
        if (a.highlights === undefined){
           path = '/art/'+id;  }
        else {
           path = '/col/'+id;
        }
        return (<div key={k} ><Row ><Col xs={12} md={8}>
          <Link to={{
            pathname: path,
            query: { id }
          }}>
        <p className="searchText">{a.title}</p>
        </Link>
        </Col></Row></div>);})}
    </div>
  )
}


export default Search;



