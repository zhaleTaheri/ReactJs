import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: '#EFEFEF',
        padding: 10,
        paddingRight: 80,
        paddingLeft: 80
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    itemHeader: {
        margin: 8,
        cursor: 'pointer',
        marginLeft:10,
       
    },
    itemTextHeader: {
        margin: 8,
        cursor: 'pointer',
        marginLeft:10,
        "&:hover": {
            borderBottom: '1px solid #808080',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
          },
        
    },
    login: {
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 110,
        fontSize: 9,
        margin: 8,
        cursor: 'pointer',
      
    },
    signup: {
        color: '#026764' ,
        borderRadius:110,
        fontSize:9,
        borderColor:'#026764',
    },
    
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <div >
            <Toolbar className={classes.toolbar}>
                <img src={require('./Image/logo.png')} className={classes.itemHeader} />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <a className={classes.itemTextHeader} >Reservation</a>
                <a className={classes.itemTextHeader} >Orders</a>
                <Button variant="outlined" className={classes.login}>
                    log in
                </Button>
                <Button variant="outlined" className={classes.signup}>
                    Sign up
                </Button>
                <IconButton className={classes.itemHeader}>
                    <ShoppingBasketIcon style={{ color: '#026764', fontSize: 30 }} />
                </IconButton >
            </Toolbar>

        </div>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};