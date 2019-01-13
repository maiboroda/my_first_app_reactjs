import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import styled from 'styled-components';
import Link from './Link';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
		return(
			<Row>
				<Col lg={12} >
					<Navbar expand="md">
         				<NavbarToggler onClick={this.toggle} />
          				<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="mr-auto  mx-auto" navbar>
								<NavItem><Link link="#" text="Вызов мастера"/></NavItem>
								<NavItem><Link link="#" text="Прайс на ремонт"/></NavItem>
								<NavItem><Link link="#" text="Наши преимущества"/></NavItem>
								<NavItem><Link link="#" text="Схема работы"/></NavItem>
								<NavItem><Link link="#" text="Примеры работ"/></NavItem>
								<NavItem><Link link="#" text="Контакты"/></NavItem>
							</Nav>
						 </Collapse>
					</Navbar>
				</Col>
			</Row>
		)
	} 
}

export default Header;