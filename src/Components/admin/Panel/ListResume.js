import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditResume from './EditResume';
import WatchResume from './WatchResume';
import {connect} from 'react-redux';
import {deleteResume,addResume} from '../../redux/reducers/action';
import {Container,Toolbar,AppBar,Typography,Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      marginTop:theme.spacing(-5),
      overflow: 'scroll',
      height: '67rem',
      width:'100%',
      position: 'relative'
    },
    showAllButton: {
      marginLeft:theme.spacing(60),
      marginTop:theme.spacing(13)
    },
    empty: {
        position:'absolute',
        left: '50%',
        transform:' translate(-50%, 0)',
        marginBottom: theme.spacing(35),
        marginTop:'5rem'
    },
    listData: {
        marginTop:'4rem',
        marginLeft:'2rem'
    },
    person: {
        padding:'1rem'
    },
    buttonEdit: {
        marginLeft:'40%'
    },
    buttons: {
        marginLeft:'1rem'
    },
    personImage: {
        width:'4rem',
        heigth:'4rem',
        marginBottom:'-2rem'
    }
    
  }))


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

    let classes = useStyles();
    const removeResume = id => {
        axios.delete('https://5f34067b9124200016e185b4.mockapi.io/resume/' + id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        props.deleteResume(id);
    }

    
    const showResume = (id,fio,about,age,phone,email,img) => {
        setFlagRead(!flagRead);
        setActiveEdit(!isActiveEdit)
        setCount(count+1)
        if(flagRead) {
        for(let i = 0; i < count; i++) {
            setList(<WatchResume id={id} fio={fio} about={about} age={age}
            phone={phone} email={email} img={img} />)
        }
    }else {
        for(let i = 0; i < count; i++) {
            setList([])
        }
    }
}
    const editResume = (id,fio,about,age,phone,email,img) => {
        setFlag(!flag)
        setActiveShow(!isActiveShow);
        setEditCount(editCount + 1);
        if(flag) {
        for (let i = 0; i < editCount; i++) {
            setEditList(<EditResume id={id} fio={fio} about={about} age={age}
                phone={phone} email={email} img={img}/>)
        }
    }else {
        for (let i = 0; i < editCount; i++) {
            setEditList([])
        }
    }
    }

    return (
        <div className={classes.root}> 
            {list}
            {editList}
            {!data.length && <h1 className={classes.empty}>Записей пока что нету</h1> } 
            {data.map(el => 
            <div className={classes.listData}>
                <img src={el.img} className={classes.personImage} />
                <span className={classes.person}>{el.fio}</span>
                <span className={classes.person}>{el.age}</span>
                <span className={classes.person}>{el.email}</span>
                <Button className={classes.buttonEdit} variant="contained" color="primary" disabled={isActiveEdit} onClick={() => editResume(el.id,el.fio,el.about,el.age,el.phone,el.email,el.img)}>{flag ? 'Edit' : 'Finish editing'}</Button>
                <Button className={classes.buttons} variant="contained" color="secondary" onClick={() => removeResume(el.id)}>delete</Button>
                <Button className={classes.buttons} variant="contained" color="primary" disabled={isActiveShow} onClick={() => showResume(el.id,el.fio,el.about,el.age,el.phone,el.email,el.img)}>{flagRead ? 'View' : 'End viewing'}</Button>
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