import React from 'react';
import '../css/Testimonios.css';
function Testimonio(props) {
    return(
        <div className="container_testimony">
          <img className="testimony_img" src={require(`../img/foto-${props.img}.jpg`)} alt="imagen perfil"/>
          <div className="container_text_testimony">
            <p className="testimony_name">
              <strong>{props.name}</strong> en {props.country}
            </p>
              <p className="testimony_position">
             {props.position} en <strong>{props.company}</strong>
              </p>
              <p className="testimony_text">{props.testimony}</p>
          </div>
        </div>
    );
}
export default Testimonio;