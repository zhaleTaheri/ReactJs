import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({

    buttomAddress: {
        textAlign: 'center',
        flex: 1,
        display: 'inline-block',
        margin: '10px',
        cursor: 'pointer',
        paddingBottom: 'px',
        marginLeft: '92px',
    },
    div: {
        flex: 1,
        display: 'inline-block',
        textAlign: 'center:'
    },
    taga: {
        textAlign: 'center',
        flex: 1,
        display: 'inline-block',
        margin: '10px',
        cursor: 'pointer',
        paddingBottom: 'px',
        "&:hover": {
            borderBottom: '2px solid #026764',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    taga1: {
        textAlign: 'center',
        flex: 1,
        display: 'inline-block',
        margin: '10px',
        cursor: 'pointer',
        paddingBottom: 'px',
        "&:hover": {
            borderBottom: '2px solid #026764',
        }
    },
    Change: {
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 110,
        fontSize: 9,
        margin: '10px'
    },
    Button: {
        color: '#fff',
        backgroundColor: '#996515',
        borderRadius: 110,
        fontSize: 9
    },
    span: {
        color: '#ccc',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    }
}));
function App() {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.buttomAddress}>
                <div style={{ color: '#996515' }}>ASAP Delivery</div>
                <Button variant="outlined" className={classes.Button}>
                    What's Your Address ?
        </Button>
            </div>
            <div className={classes.div}>
                <Button variant="outlined" className={classes.Change}>
                    Change
        </Button>
            </div>
            <div className={classes.div}>
                <a className={classes.taga}>Delivery</a> <span className={classes.span}>or</span>
                <a className={classes.taga}>Pickup</a><span className={classes.span}>| </span>
                <a className={classes.taga1}>Catering</a>
            </div>

        </div>
    );
}

export default App;
