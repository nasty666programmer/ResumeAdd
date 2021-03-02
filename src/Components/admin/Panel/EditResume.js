import React, { useState } from 'react';
import axios from "axios";


function EditResume(props) {
    const {firstName,lastName,job,phone,email,country,id} = props;
    const [forms,setForms] = useState({
        id,
        firstName,
        lastName,
        country,
        job,
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
        .then(res => console.log(res))
        .catch(err => console.log(err))
       // setForms({...forms})
        
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



export default EditResume;