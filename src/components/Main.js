import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import Slider from './Slider';

const Repair = styled.div`
  color: #ffffff;
  font-weight: 700;
  line-height: 50px;
  font-size: 40px;

  span {
	font-size: 24px;
	line-height: 30px;
	display: block;
  }
`

const SubRepair = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`

class Main extends React.Component {
	render () {
		return(

			<Row>
				<Col lg={{size: 5, offset: 1}}>
					<Repair>Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span></Repair>
					<SubRepair className="pt-5 pb-5">Оставьте заявку на бесплатную диагностику без очереди, и получите защитное стекло, стоимостью 1000 рублей, с установкой в подарок!</SubRepair>
					<Button color="warning" className="myColorWarning" size="lg">Отправить заявку!</Button>
				</Col>

				<Col lg={6}>
					<Slider/>
				</Col>
			</Row>
		)
	} 
}

export default Main;