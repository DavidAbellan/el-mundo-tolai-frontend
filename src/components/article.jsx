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
  let path = '/art/' + props.id;
  

  if (outstanding) {
    if (title.length < 20) {
      return (
        
        <div className="outstandingNew">
          <h2 className="title">{title}</h2>
           <Link to={{
            pathname: path,
            query: { id },
            id
            }}>

            <img src={photo.path} alt={title} className="photoPrincipalOutstanding" >
              </img>
           </Link>

           <div className="subhead">{"@" + author + " || " + created + "  || "}
            <Category {...categories}></Category>
           </div>
        </div>
      );
    } else {
      return (
        <div className="formatTitleMoreThan20">
          <h2 className="title" >{title}</h2>
           <div className="outstandingNewMoreThan20">

          <Link to={{
            pathname: path,
            query: { id }
            }}>
            <div className="card-image small">
              <img src={photo.path} alt={title} className="photoPrincipalOutstanding" />
            </div>
          </Link>

          <div className="subhead">{"@" + author + " || " + created + "  || "}
            <Category {...categories}></Category>
          </div>
        </div>
        </div>
      );
    }

  } else {
    if (photo.size < 100000) {

      return (
        <div className="notOutstanding">
                <div>
              <img className="imageNotOutstanding" alt={title} src={photo.path} />
              </div>
              <div >
                <Link className="titleNotOutstanding" to={{
                  pathname: path,
                  query: { id }
                }}>
                  <h1 className="titleNotOutstanding" >{title}</h1>
                </Link>
              </div>
            
        </div>
      );
    } else {
      return (
        <div className="notOutstanding">
              <img className="imageNotOutstanding" alt={title} src={photo.path} />
              <div >
              <Link className="titleNotOutstanding" to={{
                  pathname: path,
                  query: { id }
                }}>
                  <h1 className="titleNotOutstanding" >{title}</h1>
                  </Link>

              </div>
            
        </div>);

    }

  }
}



export default article;