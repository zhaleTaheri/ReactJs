import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Facebook from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: '#000',

    },
    app: {
        margin: '0 5px',
        display: 'inline-block',
        width: '350px',
        marginLeft: '10%'
    },
    links: {
        display: 'inline-block',
        textAlign: 'left',
        padding: '20px 10px',
        color: '#a5a5a5',
        fontSize: 18,

        "&:hover": {
            color: '#04cbc5',
            borderBottom: '2.5px solid #04cbc5',
        },
    },
    footer11: {
        margin: '0 0 20px',
        marginRight: '10%',
        maxWidth: '80%',

    },
    footer12: {
        margin: '0 0 20px',
        marginLeft: '7%',
        maxWidth: '80%',

    },
    footer13: {
        margin: '0 0 20px',
        marginLeft: '7%',
        maxWidth: '80%',
        borderTop: '.5px solid #464646',
         borderBottom: '.5px solid #262626',
          paddingBottom: '50px' ,
          paddingTop:'1%'

    },
    footerlinks: {
        display: 'inline-block',
        color: '#a5a5a5',
        float: 'right'
    },
    linkgroup: {
        width: '100%',
        display: 'inline-block',
        float:'left'
    },
    header: {
        color: '#fff',
        fontSize: '20px'
    },
    link12: {
        color: '#a5a5a5',
        display: 'block',
        padding: '4px 0',
        "&:hover": {
            color: '#04cbc5',
        },

    },
    link13: {
        color: '#a5a5a5',
        display: 'inline-block',
        textAlign: 'center',
        padding: '4px 0',
        "&:hover": {
            color: '#04cbc5',
        },
        margin: '4%'
    },
    description: {
        margin: '40px 0 30px',
        fontSize: '16px',
        marginLeft: '7%',
        width: '90%',
    },
    social: {
        float: 'right',
        display: 'inline-block',
        width: '180px',
        marginRight: '15%'
    },
    links1: {
        float: 'left',
        display: 'inline-block',
        width: '500px',

    },
    title: {
        color: '#d7d7d7',
        marginBottom: '5px'
    },
    text: {
        color: '#a5a5a5',
        textAlign: 'justify'
    }
    , body: {
        float: 'left',
        textAlign: 'justify'
    },
    span:{
        color: '#a5a5a5',
         margin: '1%' 
    }
}));

export default function Footer(props) {
    const classes = useStyles();


    return (
        <div className={classes.footer}>
            <img src={require('./Image/footer.png')} style={{ width: '100%', marginBottom: 0, float: 'left' }} />
            <div className={classes.footer11}>
                <div className={classes.app}>

                    <img src={require('./Image/appstore.png')} style={{ cursor: 'pointer' }} />

                    <img src={require('./Image/googleplay.png')} style={{ cursor: 'pointer' }} />

                </div>
                <div className={classes.footerlinks}>
                    <a className={classes.links}>About</a>
                    <a className={classes.links}>Services</a>
                    <a className={classes.links}>Support</a>
                    <a className={classes.links}>Gallery</a>
                    <a className={classes.links} >Terms</a>
                </div>
            </div>
            <div className={classes.footer13} >
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <img src={require('./Image/logo2.png')} style={{ cursor: 'pointer' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}> Main Menu</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Pickup</a>
                                    <a className={classes.link12}>Delivery</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>Orders</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Upcoming Orders</a>
                                    <a className={classes.link12}>Recent Orders</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>Reservation</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Recent Reservation</a>
                                    <a className={classes.link12}>Wait To Be Seated</a>
                                </div>
                            </div>
                        </Grid>
                  
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>Profile</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Promos & Credits</a>
                                    <a className={classes.link12}>Rewards</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>Special Offers</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Chief Special</a>
                                    <a className={classes.link12}>code FREEDINE</a>
                                    <a className={classes.link12}>Breakfast Special</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>Support</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Pickup</a>
                                    <a className={classes.link12}>Delivery</a>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div className={classes.linkgroup}>
                                <div className={classes.header}>FREE FOOD</div>
                                <div className={classes.body}>
                                    <a className={classes.link12}>Get $20.00 credit for your next order.</a>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
            <div className={classes.description}>
                <div className={classes.title}>Delight customers everywhere with a branded custom-built native iOS, native Android and Installable Website Application.</div>
                <div className={classes.text}>Opeqe is reliable, fast and commission free all-in-one ordering solutions for multi-location or single location restaurants.</div>
            </div>
            <div className={classes.description} style={{ display: 'inline-block' }}>
                <div div className={classes.links1}>
                    <span style={{ color: '#a5a5a5' }}>©2019 OPEQE INC</span><span className={classes.span}>|</span>
                    <a className={classes.link13}>Terms & Conditions</a> <span className={classes.span}>|</span>
                    <a className={classes.link13}>Privacy Policy</a>
                </div>
                <div className={classes.social} >
                    <a className={classes.link13}> <Instagram /></a>
                    <a className={classes.link13}> <Twitter /></a>
                    <a className={classes.link13}> <Facebook /></a>
                    <a className={classes.link13}> <YouTube /></a>
                </div>
            </div>
        </div>

    );
}

