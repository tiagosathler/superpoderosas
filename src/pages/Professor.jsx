import React from "react";
import Docinho from "../components/Docinho";
import Florzinha from "../components/Florzinha";
import Lindinha from "../components/Lindinha";
import '../styles/Professor.css';

class Professor extends React.Component {
  render() {
    return (
      <div className="Professor">
        <div className="espaco-do-professor">
          <p>Professor</p>
          <img src="https://www.clipartmax.com/png/full/159-1595855_%C2%A0-powerpuff-girls-professor-utonium.png" alt="Professor" width="100px" />
        </div>
        <div className="quarto-das-meninas">
          <div className="espaco-da-menina">
            <Lindinha />
          </div>
          <div className="espaco-da-menina">
            <Florzinha />
          </div>
          <div className="espaco-da-menina">
            <Docinho />
          </div>    
        </div>
        
      </div>     
    )
  }
}

export default Professor;
