import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import FormsResume from './Components/FormsResume';
import Login from './Components/auth/Login'; 
import {addResume} from './Components/redux/reducers/action';
import axios from 'axios';
import {connect} from 'react-redux';
import { useEffect} from 'react';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle, BottomNavigation} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'
import {useState} from 'react';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1,
   
    
  },
  menuButton: {
    marginRight:theme.spacing(5)
  },
  title: {
    marginRight:theme.spacing(15)
  },
  main: {
    paddingBottom: '1px',
    position:'relative'
  },
  footer: {
    backgroundColor:'blue',
    width:'100%',
    height:'10rem',
    position: 'fixed',
    left: '0',
    bottom: '-1rem',
    
  }

}))


function App(props) {
  const classes = useStyles()


  useEffect(() => {
    if(props.data.length == 0 ) {
    axios.get('https://5f34067b9124200016e185b4.mockapi.io/resume')
    .then(res => props.addResume(res.data)).then(res => console.log(res.data))
    .catch(err => console.log(err))
    }
  },[])

  return (
    <Router>
      <AppBar position='fixed'>
        <Container>
          <Toolbar>
          <Typography className={classes.title}>
              Guidance
          </Typography>

          <Typography className={classes.root}>
              <Link to='/'className={classes.root,classes.menuButton} style={{textDecoration:'none'}}><span>Home</span></Link>
              <Link to='#'className={classes.menuButton} >Courses</Link>
              <Link to='#'className={classes.menuButton} >About</Link>
              <Link to='#'className={classes.menuButton} >Video</Link>
              <Link to='#'className={classes.menuButton} >Intresting</Link>
          </Typography>
                  
          <Link to='/admin' style={{textDecoration:'none'}}><Button color='secondary' variant='contained'>Authorization</Button></Link>
  
           </Toolbar>
          </Container>
      </AppBar>
       
          <Switch className={classes.main}>
            <Route path='/' exact>
              <FormsResume />
            </Route>
            <Route path='/admin'>
              <Login/>
            </Route>
          </Switch>

          <footer className={classes.footer}>
            <BottomNavigation>
              

            </BottomNavigation>
            <Typography align='center' gutterBottom></Typography>
          </footer>
    </Router>
  );
}


const mapDispatchToProps = {
  addResume
}

const mapStateToProps = state => {
  return {
    data:state.resume.resume
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
