import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import ListResume from './Panel/ListResume';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle,TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    showAllButton: {
        position: 'relative',
        left: '50%',
        transform:' translate(-50%, 0)',
      marginTop:theme.spacing(1)
    },
    links: {
        textDecoration:'none',
        width:'100%',
        height:'inherit'
    },
    main: {
        marginTop:theme.spacing(32),
    },
    exitBtn: {
        width: '100%',
        textAlign: 'center',
        height: '2rem',
        marginTop: '4rem',
        
    }
  }))


function Main(props) {
    const classes = useStyles()
    const [flag,setFlag] = useState(false);

    return (
        <Router>
        <div className={classes.links}>
            <Button onClick={props.LogOut} variant='contained' color='secondary' className={classes.exitBtn}>Exit</Button>
                <Link className={classes.main}  to='/allResume'>
                    <Button variant='contained'
                    color='primary' disabled={flag} 
                    className={classes.showAllButton}
                    onClick={() => setFlag(true)} >
                        Show all resume
                    </Button>
                </Link>
            
            <Switch>
                <Route path='/allResume'>
                    <ListResume />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Main;