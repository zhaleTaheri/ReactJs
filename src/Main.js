import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SpecialOffers from './SpecialOffers';
import Header from './Header';
import ASAPDelivery from './ASAPDelivery';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import Slider from './slider';

const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    marginTop: '20px',
    marginButtom: '20px',
  },
  itemGrid: {
    textAlign: 'center'
  },
  itemGrid1: {
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    margin:'20px'
  },
  span:{
    color: '#a5a5a5',
     fontWeight: 'bold'
  },
  btnOnline:{
    color: '#fff', 
    backgroundColor: '#000',
     borderRadius: 110, 
     fontSize: 20,
      float: 'left'
  }
}));


export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <div>
      <Header />
      <Slider />
      <div style={{ boxShadow: "0px 2px 0px #efefef" }}>
        <ASAPDelivery />
      </div>
      <SpecialOffers />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <React.Fragment>
              <Grid item xs={6} className={classes.itemGrid}>
                <img src={require('./Image/promotion.jpg')} />
              </Grid>

              <Grid item xs={6} className={classes.itemGrid}>
                <div >
                  <span className={classes.span}>Branded </span>
                  <span className={classes.span}>Gift Card</span>
                </div>
                <img src={require('./Image/logo3.png')} />
                <div style={{ marginLeft: '30%' }}>
                  <p style={{ textAlign: 'justify' }}>Opeqe provides a wide range of customizable products
         <br />for reward and incentive programs that can meet your<br /> restaurant’s goals.</p>
                  <p style={{ textAlign: 'justify' }}>Whether you are looking to drive the addition of new<br /> customers, increase the loyalty of existing ones we have a <br />customized solution for you.</p>
                  <Button variant="outlined" className={classes.btnOnline}>
                    GET ONLINE QUOTE
        </Button>
                </div>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={1}>
          <Grid item xs={1} ></Grid>
          <Grid item xs={10} className={classes.itemGrid1}>
            <h3>Ready to order?</h3>
            <div style={{color:'#ccc'}}>Browse our menu for dine-in, delivery or pickup and catering</div>
            <ASAPDelivery />
            </Grid>
            <Grid item xs={1} ></Grid>
          </Grid>
          </Grid>
      </div>
     
      <Footer />
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};