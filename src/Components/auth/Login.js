import React, { useEffect } from 'react';
import {useState} from 'react';
import LoginForm from './LoginForm';
import Main from '../admin/Main';
import axios from 'axios';

function Login(props) {
    const [user,setUser] = useState({
        login:'',
        password:''
    })

    let [data,setData] = useState({})

    useEffect(() => {
        axios.get('https://5f34067b9124200016e185b4.mockapi.io/admins')
        .then(res => res.data.map(el => setData(el)))
        .catch(err => console.log(err))
    },[])


    const logInfo = details => {
        if(details.login == data.login && details.password == data.password) {
            setUser({
                login:details.login,
                password:details.password
            })
        }
    }

    const LogOut = () => {
        setUser({login:'',password:''})
    }

    return (
        <div>
            {user.login != '' && user.password != '' ? <Main LogOut={LogOut}/>: <LoginForm logInfo={logInfo}/>}            
        </div>
    )
}



export default Login;