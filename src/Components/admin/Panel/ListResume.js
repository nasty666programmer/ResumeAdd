import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditResume from './EditResume';
import WatchResume from './WatchResume';
import {connect} from 'react-redux';
import {deleteResume,addResume} from '../../redux/reducers/action';

function ListResume(props) {
    const {data} = props;
    const [flag,setFlag] = useState(true)
    const [flagRead,setFlagRead] = useState(true)
    const [count,setCount] = useState(1);
    const [list,setList] = useState([]);
    const [editCount,setEditCount] = useState(1);
    const [editList,setEditList] = useState([]);
    const [isActiveEdit,setActiveEdit] = useState(false)
    const [isActiveShow,setActiveShow] = useState(false)


    const removeResume = id => {
        axios.delete('https://5f34067b9124200016e185b4.mockapi.io/resume/' + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.deleteResume(id);
    }

    
    const showResume = (id,firstName,lastName,job,phone,email,country) => {
        setFlagRead(!flagRead);
        setActiveEdit(!isActiveEdit)
        setCount(count+1)
        if(flagRead) {
        for(let i = 0; i < count; i++) {
            setList(<WatchResume id={id} firstName={firstName} lastName={lastName} job={job}
            phone={phone} email={email} country={country} />)
        }
    }else {
        for(let i = 0; i < count; i++) {
            setList([])
        }
    }
}
    const editResume = (id,firstName,lastName,job,phone,email,country) => {
        setFlag(!flag)
        setActiveShow(!isActiveShow);
        setEditCount(editCount + 1);
        if(flag) {
        for (let i = 0; i < editCount; i++) {
            setEditList(<EditResume id={id} firstName={firstName} lastName={lastName} job={job}
                phone={phone} email={email} country={country}/>)
        }
    }else {
        for (let i = 0; i < editCount; i++) {
            setEditList([])
        }
    }
    }

    return (
        <div> 
            {list}
            {editList}
            {!data.length && <h1>Записей пока что нету</h1> } 
            {data.map(el => 
            <div>
                <h5>{el.firstName}</h5>
                <h5>{el.lastName}</h5>
                <h2>{el.job}</h2>
                <button disabled={isActiveEdit} onClick={() => editResume(el.id,el.firstName,el.lastName,el.job,el.phone,el.email,el.country)}>{flag ? 'Edit' : 'Finish editing'}</button>
                <button onClick={() => removeResume(el.id)}>delete</button>
               <button disabled={isActiveShow} onClick={() => showResume(el.id,el.firstName,el.lastName,el.job,el.phone,el.email,el.country)}>{flagRead ? 'View' : 'End viewing'}</button>
            </div>
                )}
                
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        data:state.resume.resume
    }
}

const mapDispatchToProps = {
    deleteResume,addResume
}

export default connect(mapStateToProps,mapDispatchToProps)(ListResume);