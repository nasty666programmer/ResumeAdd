import React, { useEffect, useState } from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import {editResume} from '../../redux/reducers/action';

function EditResume(props) {
    const {id,fio,about,age,phone,email,img} = props;
    const [forms,setForms] = useState({
        id,
        fio,
        about,
        age,
        img,
        email,
        phone
    });
    const [flag,setFlag] = useState(false)

   
    const handleChange = (e) => {
        const {name,value} = e.currentTarget;
        setForms({...forms,
            [name]:value
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://5f34067b9124200016e185b4.mockapi.io/resume/' + id,{...forms})
        .then(res => {
                axios.get('https://5f34067b9124200016e185b4.mockapi.io/resume/')
                .then(res => props.editResume(res.data))
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
       
        
    }


    let styles = {
        border:'solid 1px black',
        position:'absolute', 
        zIndex:'2',
        marginLeft:'40%',
        width:'30rem',
        height:'20rem',
        textAlign:'center'
    }
    

    return (
        <div style={styles}>
            <form onSubmit={handleSubmit}>
            <input type='text' name='firstName' value={forms.firstName} placeholder='enter your name' onChange={handleChange}/>
                <br /> 
                <input type='text' name='lastName' value={forms.lastName} placeholder='enter your last name' onChange={handleChange}/>
                <br />
                <input type='text' name='country' value={forms.country} placeholder='enter your country' onChange={handleChange}/>
                <br /> 
                <input type='text' name='job' value={forms.job} placeholder='enter your job' onChange={handleChange}/>
                <br /> 
                <input type='text' name='email' value={forms.email} placeholder='enter your email' onChange={handleChange}/>
                <br /> 
                <input type='text' name='phone' value={forms.phone} placeholder='enter youur phone' onChange={handleChange}/>
                <br /> 
                <button >Add Resume</button>
            </form>
        </div>
    )
}


const mapDispatchToProps = {
    editResume
}


export default connect(null,mapDispatchToProps)(EditResume);