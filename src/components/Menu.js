import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
  	display:block;
  	color: #464646;
  	font-size: 21px;
  	font-weight: 700;
  }
`

const Phones = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;

  span {
  	display:block;
  	color: #464646;
  	font-size: 21px;
  	font-weight: 700;
  }
`

class Adress extends React.Component {
	render () {
		return (
			<span> {this.props.addr} </span>
		)
	}
};

class Phone extends React.Component {
	render() {
		return (
			<span> {this.props.numbers} </span>
		)
	}
}

class Menu extends React.Component {
	render () {
		return(
			<Row>
				<Col lg={3} className="pt-4 pb-4">
					<Repair> Ремонт айфонов в сервисном центре и на выезде </Repair>
				</Col>
				<Col lg={{ size: 3, offset: 1 }} className="pt-4 pb-4">
					<WorkTime> Пн-пт с 10 до 20, сб,вс с 11 до 18 <Adress addr="Ленинская, 301" /> </WorkTime>
				</Col>
				<Col lg={3} className="pt-4 pb-4">
					<Phones> Звонки принимаются 24 часа <Phone numbers="8 (846) 922 55 44"/> </Phones>
				</Col>
				<Col lg={2} className="pt-4 pb-4">
					<Button className="myColor mt-2" color="primary" size="md"> Заказать звонок! </Button>
				</Col>
			</Row>
		)
	}
}

export default Menu;