import React, { useEffect } from 'react';
import {useState} from 'react'
import axios from 'axios';
import validator from 'validator';
import {connect} from 'react-redux';
import {addResume} from './redux/reducers/action';

function FormsResume(props) {
    const [forms,setForms] = useState({
        id:Date.now(),
        firstName:'',
        lastName:'',
        country:'',
        job:'',
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
        if(!isEmpty(forms.firstName) && !isEmpty(forms.firstName) && !isEmpty(forms.firstName) && !isEmpty(forms.country) && !isEmpty(forms.job)) {            
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

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(validData() && validEmail() && validPhone()) {
            if(emails.indexOf(forms.email) == -1){
                axios.post('https://5f34067b9124200016e185b4.mockapi.io/resume',{...forms})
                .then(props.addResume({...forms}))
                .then(setTimeout(() =>
                window.location.reload()
                ,3000))
                .catch(err => console.log(err))
                
                flag = true;
                 
            }
        }
        else{
            flag = false
        }
        setForms({
            firstName:'',
            lastName:'',
            country:'',
            job:'',
            email:'',
            phone:''
        })
       
    }

        
    return (
        <div>
            <h1>Resume</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='firstName' value={forms.firstName} placeholder='enter your name' onChange={handleChange}/>
                <hr /> 
                <input type='text' name='lastName' value={forms.lastName} placeholder='enter your last name' onChange={handleChange}/>
                <hr />
                <input type='text' name='country' value={forms.country} placeholder='enter your country' onChange={handleChange}/>
                <hr /> 
                <input type='text' name='job' value={forms.job} placeholder='enter your job' onChange={handleChange}/>
                <hr /> 
                <input type='text' name='email' value={forms.email} placeholder='enter your email' onChange={handleChange}/>
                <hr /> 
                <input type='text' name='phone' value={forms.phone} placeholder='enter youur phone' onChange={handleChange}/>
                <hr /> 
                <button >Add Resume</button>
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