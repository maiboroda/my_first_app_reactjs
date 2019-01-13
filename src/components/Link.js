import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
	color: ${props => props.active ? 'pink' : 'white'};
	font-weight: 400px;
	font-family: "Roboto";

	&:hover { 
		color: #8d8d8d;
		text-decoration: none;
	}

	&:last-child {
		border-right: none;
	}
`

class Link extends React.Component {
	render() {
		return (
			<StyledLink className="nav-link" href={this.props.link}> {this.props.text} </StyledLink>
		)
	}
}

export default Link;