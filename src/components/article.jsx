import React from "react";
import Category from "./articleCategoryButton";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function article(props) {
  let outstanding = props.outstanding;
  let title = props.title;
  let author = props.author;
  let photo = props.photo;
  let created = props.created
  let id = props.id;
  let categories = props.categories;
  let path = '/art/' + id;
  
   

  if (outstanding) {
    if (title.length < 20) {
      return (
        <div className="outstandingNew">
          <Link to={{
            pathname: path,
            query: { id }
          }}>

            <h2>{title}</h2>
            <img src={photo.path} alt={title} className="photoPrincipalOutstanding" />
          </Link>

          <div className="subhead">{"@" + author + " || " + created + "  || "}
            <Category {...categories}></Category>
          </div>
          <br></br>

        </div>
      );
    } else {
      return (
        <div className="outstandingNewMoreThan20">
          <Link to={{
            pathname: path,
            query: { id }
          }}>
            <h2 >{title}</h2>
            <div className="card-image small">
              <img src={photo.path} alt={title} className="photoPrincipalOutstanding" />
            </div>
          </Link>
          <div className="subhead">{"@" + author + " || " + created + "  || "}
            <Category {...categories}></Category>
          </div>
          <br></br>
        </div>
      );
    }

  } else {
    if (photo.size < 100000) {

      return (
        <div className="card mb-3" style={{ width: '945px', margin: '2em' }}>
          <div className="row no-gutters">
            <div className="newColumns">
              <img className="new-image" alt={title} src={photo.path} />

              <div className="titleNew">
                <Link className="titleNotOutstanding" to={{
                  pathname: path,
                  query: { id }
                }}>
                  <h1 className="titleNotOutstanding" >{title}</h1>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
            </div>
          </div>
          <br></br>

        </div>
      );
    } else {
      return (
        <div className="card mb-3" style={{ width: '945px', margin: '2em' }}>
          <div className="row no-gutters">
            <div className="newColumns">
              <img className="new-image" alt={title} src={photo.path} />
              <div className="titleNew">
                <Link className="titleNotOutstanding" to={{
                  pathname: path,
                  query: { id }
                }}>
                  <h1 className="bigImageNewh1" >{title}</h1>
                </Link>

              </div>
            </div>
            <div className="col-md-8">
            </div>
          </div>
          <br></br>

          
        </div>);

    }

  }
}



export default article;