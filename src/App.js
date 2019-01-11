import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="container">
         <SayFullName name="Vladimir" surname="Mayboroda" link="https://maiboroda.pro" />
         <SayFullName name="Ivan" surname="Ivanov" link="https://ivanov.pro" />
         <SayFullName name="Sergey" surname="Sergeev" link="https://sergeev.pro" />
      </div>
    );
  }
}


function SayFullName(props) {
  return (
    <div>
      <h1>Мое имя {props.name}, фамилия - {props.surname}</h1>
      <a href={props.link}> >> Ссылка на мой профиль</a>
    </div>
  )
}


export default App;
