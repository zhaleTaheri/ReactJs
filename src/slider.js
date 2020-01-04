import React from 'react';
import range from 'lodash/range';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 4;
const noOfCards = 1;
const autoPlayDelay = 5000;
const chevronWidth = 100;

const carouselItems = range(noOfItems).map(index => (
   <div key={index}>
    <img src={require('./Image/slider'+(index+1)+'.jpg')} style={{ cursor: 'pointer',width: '100%',height: '600px'}} />
  </div>
));

export default class Slider extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (

        <ItemsCarousel
          gutter={4}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />

    );
  }
}