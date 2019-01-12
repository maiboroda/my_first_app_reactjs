import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components'
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const url = process.env.PUBLIC_URL + '/img/bg.jpg';

const MainWrapperCover = styled.main `
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (

      <div className="App">
      
        <div className="container-fluid wrapper">
          <Container>
            <Header />
          </Container>
        </div>

        <div className="container-fluid menu-wrapper">
          <Container>
            <Menu />
          </Container>
        </div>

        <div className="container-fluid main-wrapper ml-0 mr-0 pl-0 pr-0">
          <MainWrapperCover>
            <Container>
             <Main />
            </Container>
          </MainWrapperCover>
        </div>

      </div>

    );
  }
}


export default App;
