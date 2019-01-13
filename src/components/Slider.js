import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

import Slide_1 from '../img/slide-1.jpg';
import Slide_2 from '../img/slide-2.jpg';
import Slide_3 from '../img/slide-3.jpg';
import Slide_4 from '../img/slide-4.jpg';

const items = [
	{ src: `${Slide_1}` },
	{ src: `${Slide_2}` },
	{ src: `${Slide_3}` },
	{ src: `${Slide_4}` }
];

class Slider extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = { 
	    	activeIndex: 0,
	   	}
	
	 	this.next = this.next.bind(this);
	    this.previous = this.previous.bind(this);
	    this.goToIndex = this.goToIndex.bind(this);
	    this.onExiting = this.onExiting.bind(this);
	    this.onExited = this.onExited.bind(this);
	    
	}

	onExiting() {
    	this.animating = true;
  	}

  	onExited() {
    	this.animating = false;
  	}

  	next() {
	    if (this.animating) return;
	    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
	    this.setState({ activeIndex: nextIndex });
	}

	previous() {
	    if (this.animating) return;
	    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
	    this.setState({ activeIndex: nextIndex });
	}

	goToIndex(newIndex) {
	    if (this.animating) return;
	    this.setState({ activeIndex: newIndex });
	}

	render() {

		const { activeIndex } = this.state;

		const slides = items.map((items) => {
	      return (
	        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={items.src}>
	          <img src={items.src} />
	        </CarouselItem>
	      );
	    });

		return(
			 <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
        		<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
			 		{slides}
			  	<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        		<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
			 </Carousel>
		)
 	}
}

export default Slider;