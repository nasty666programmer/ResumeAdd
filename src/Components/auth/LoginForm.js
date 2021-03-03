import React,{useState} from 'react';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle,TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    menuButton: {
      marginLeft:theme.spacing(15),
      marginTop:theme.spacing(3)
    },
    title: {
      marginRight:theme.spacing(15)
    },
    forms: {
        marginLeft:theme.spacing(65),
        marginTop:theme.spacing(25)
    },
    textField: {
        width: '20rem',
        textAlign:'center'
    }
  }))

function LoginForm(props) {
    const [userForm,setUserForm] = useState({
        login:'',
        password:''
    })
    const classes = useStyles()

    const handleChange = (e) => {
        const {name,value} = e.currentTarget;
        setUserForm({...userForm,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logInfo(userForm)
    }

   

    return (
        <div className={classes.forms}>
            <form onSubmit={handleSubmit} className={classes.root} noValidate >
                <TextField className={classes.textField} id="standard-basic" label="Login" onChange={handleChange} value={userForm.login} placeholder='enter your login' type='text' name='login'/>
                <br/>
                <TextField className={classes.textField} d="standard-basic" label="Password" onChange={handleChange} value={userForm.password} placeholder='enter your password' type='password' name='password'  />
                <br/>
                <Button className={classes.menuButton} color='primary' type='submit' variant='contained'>Log In</Button>
            </form>
        </div>
    )
}


export default LoginForm;