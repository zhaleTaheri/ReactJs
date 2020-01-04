import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import CardData from "./data/menu";
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIosSharp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIosSharp';

class SpecialOffers extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  render() {
  return (
<div style={{"maxWidth":"100%","marginLeft":"60px","marginRight":"60px","borderBottom" :"1px solid #ccc","padding":"5px"}}>
  <ItemsCarousel
    infiniteLoop={false}
    gutter={12}
    activePosition={'center'}
    chevronWidth={60}
    disableSwipe={true}
    alwaysShowChevrons={true}
    numberOfCards={3}
    slidesToScroll={3}
    outsideChevron={false}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={
      <IconButton style={{backgroundColor:'#026764'}}>
      <ArrowForwardIosIcon   style={{ color: '#fff' }}/>
    </IconButton>
    }
    leftChevron={
      <IconButton style={{backgroundColor:'#026764'}}>
          <ArrowBackIosIcon   style={{ color: '#fff' }}/>
        </IconButton>
    }
  >
     {CardData.map(({ title, courseType,image,menuType ,cuisineType,price}, id) => (
          <div  style={{margin: '5px', width: '99%',}}>
          <div key={id} >
            <img src={image} style={{width: '100%',height: '230px',borderRadius:'5px'}}/>
             <h3>{title}</h3>
             <a  style={{ color: '#69A5A3',cursor:'pointer'}}>{menuType.title}</a><span>.</span>
             <a  style={{cursor:'pointer',marginLeft:'5px'}}>{cuisineType.title}</a><span>.</span>
             <a  style={{cursor:'pointer',marginLeft:'5px'}}>{courseType.title}</a>
             <div>
             <span style={{backgroundColor:'#D7D7D7',width:'12%'}}>${price}</span>
             <span style={{backgroundColor:'#e6e6e6',width:'23%',float:'right',color: '#69A5A3', display: 'inline-block'}}>Free Delivery</span>
             </div>
          </div>
        
          </div>
        ))}
  </ItemsCarousel>

</div>


    
  
  );
}

}

export default (SpecialOffers);