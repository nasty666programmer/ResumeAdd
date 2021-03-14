import React, { useEffect } from 'react';
import {useState} from 'react'
import axios from 'axios';
import validator from 'validator';
import {connect} from 'react-redux';
import {addResume} from './redux/reducers/action';
import Button from '@material-ui/core/Button';
import {Container,Toolbar,AppBar,Typography,Box,Dialog, DialogContent, DialogContentText,DialogActions,DialogTitle,TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    menuButton: {
      marginLeft:theme.spacing(20),
      marginTop:theme.spacing(3)
    },
    forms: {
        marginLeft:theme.spacing(65),
        marginTop:theme.spacing(25)
    },
    textField: {
        width: '29.375rem',
        textAlign:'center',
        marginTop:theme.spacing(2)
    }
  }))


function FormsResume(props) {
    let classes = useStyles();
    const [images,setImages] = useState('')

    const [forms,setForms] = useState({
        id:Date.now(),
        fio:'',
        age:'',
        img:'',
        about:'',
        email:'',
        phone:''
    })

    const {isEmpty,isEmail} = validator;
   
    
    let emails = [];
  
    props.data.map(el => emails.push(el.email));
    console.log(props.data)
    let flag;



    const handleChange = (e) => {
        const {name,value} = e.currentTarget;
        setForms({...forms,
            [name]:value
        })
    }

    const validData = () => {
        if(!isEmpty(forms.fio) && !isEmpty(forms.phone) && !isEmpty(forms.about) && !isEmpty(forms.age)) {            
            return true
        }
    }
    
    const validEmail = () => {
        if(isEmail(forms.email)) {
            return true
    }
}


const validPhone = () => {
    if(validator.isMobilePhone(forms.phone)) {
        return true
    }
}



const handleFileChange =  e => {
   
    let file = e.target.files[0];
     let blob = new Blob([file],{type: 'image/jpeg'})
        let reader = new FileReader();
        reader.readAsDataURL(blob); // конвертирует Blob в base64 и вызывает onload

        reader.onload = function() {
            
            setForms({...forms, img:reader.result})
        };
        console.log(images)
    
    
}
console.log(forms)
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(validData() && validEmail() && validPhone()) {
            if(emails.indexOf(forms.email) == -1){
                axios.post('https://5f34067b9124200016e185b4.mockapi.io/resume',{...forms})
                .then(props.addResume({...forms}))
                .then(setTimeout(() =>
                window.location.reload()
                ,2500))
                .catch(err => console.log(err))
                
                flag = true;
                 
            }
        }
        else{
            flag = false
        }
        setForms({
            fio:'',
            age:'',
            img:'',
            about:'',
            email:'',
            phone:''
        })
       
    }
        
    return (
        <div>
            <h1>Resume</h1>
            <form onSubmit={handleSubmit} align='center'>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic" label="ФИО"  type='text' name='fio' value={forms.fio}  onChange={handleChange}/>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic" label="Email"  type='text' name='email' value={forms.email}  onChange={handleChange}/>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic" label="Телефон"  type='text' name='phone' value={forms.phone}  onChange={handleChange}/>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic" label="Возраст"  type='text' name='age' value={forms.age}  onChange={handleChange}/>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic" label="О себе"  type='text' name='about' value={forms.about}  onChange={handleChange}/>
                <br />
                <TextField  size='small' variant='outlined' className={classes.textField} id="standard-basic"  type='file' name='img'  onChange={handleFileChange}/>
                <br />
                <br />
                <Button type='submit' variant='contained'  color='primary'>Add Resume</Button>
            </form>

        
        </div>
    )
}

const mapDispatchToProps = {
    addResume
}

const mapStateToProps = state => {
    console.log(state)
    return {
        data:state.resume.resume
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormsResume);