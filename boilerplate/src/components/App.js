import React, { Component } from "react";
import List from "./List";
import Form from "./Form";
import "../styles/App.css"

class App extends Component
{
  render()
  {
    return (
      <div className="wrapper">
        <h1 className="name-title">
          LES BONS BAILS
        </h1>
        <h2 className="subtitle">
          <p>Bonjour, Bienvenue sur Les Bons Bails, le site qui sécurise l'échange de vos machins. Le boncoin en mieux !</p>
          <p>Veuillez vous connecter si vous avez déjà un compte. Ou rejoignez-nous dès maintenant et faites des échanges en toute sécurité.</p>
        </h2>
        <div>
            <List />
        </div>
        <div>
            <Form />
        </div>
      </div>  
    )
  }
}

export default App;