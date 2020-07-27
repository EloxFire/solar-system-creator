import React, { Component } from 'react'

import '../sass/home.scss';
import Planet from './sub/Planet';

class Home extends Component{

  constructor(props){
    super(props);

    this.state = {
      planets: []
    };
  }

  renderPlanet(){
    console.log("Clicked ! Planet created !");
    const newPlanet = [...this.state.planets, Planet]

    this.setState({
      planets: newPlanet
    });
  }


  render(){
    const { p } = this.state;
    return(
      <div>
        <div className="settings d-flex flex-row">
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <p className="m-0">Paramètres généraux :</p>
            <button className="btn btn-light" onClick={this.renderPlanet.bind(this)}>Ajouter une planète</button>
          </div>
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <p className="m-0">Gestion des planètes :</p>
            <button className="btn btn-light" onClick={this.renderPlanet.bind(this)}>Ajouter une planète</button>
          </div>
          <div className="col-4 d-flex flex-column justify-content-center align-items-center">
            <p className="m-0">Paramètres planète :</p>
            <button className="btn btn-light" onClick={this.renderPlanet.bind(this)}>Ajouter une planète</button>
          </div>
        </div>

        {
          this.state.planets.length !== 0 &&
          this.state.planets.map((Planet, i) => <Planet key={i} size="30" color="#000"/>)
        }
      </div>
    )
  }
}

export default Home;
