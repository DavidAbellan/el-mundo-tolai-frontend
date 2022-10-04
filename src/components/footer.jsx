import React from 'react';
import { Link } from 'react-router-dom';

function footer (props){
       let authors =  Object.values(props);
          return (
              <div>
              <footer className="site-footer">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <h6>El Mundo Tolai</h6>
                      <p className="text-justify">La redacción de El Mundo Tolai no se responsabiliza
                          de las opiniones de los redactores de El Mundo Tolai.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                      <h6>Autores</h6>
                      <ul className="footer-links">
                        {authors.map((a,k) => {
                              let id = a.id;
                              let path = "/auth/" + id;

                          return (
                              <Link to={{
                                    pathname: path,
                                    query: { id }
                                  }}>
                                 <li key={k}>{a.username}</li>
                            </Link>
                            );})  }
                      
                      </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                      <h6>Sobre Nosotros</h6>
                      <ul className="footer-links">
                        <li>Quiénes Somos</li>
                        <li>A Dónde Vamos</li>
                        <li>De donde venimos</li>
                        <li>Contacto</li>
                        <li>Soporte Legal</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                      <p className="copyright-text">Copyright &copy; 2022 TODOS LOS DERECHOS RESERVADOS 
                      </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                    
                    </div>
                  </div>
                </div>
          </footer>
          </div> 
          );

}

export default footer;