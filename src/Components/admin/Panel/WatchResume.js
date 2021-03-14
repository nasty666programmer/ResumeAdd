import React, { useState } from 'react';
import {Container,Toolbar,AppBar,Typography,Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1
    },
    main: {
        border:'solid 1px black',
         position: 'absolute',
         zIndex:'2',
        left: '50%',
        transform:' translate(-50%, 0)',
         width:'65%',
         backgroundColor:'gray',
         height:'28rem',
         boxShadow:'0 0 10rem black'
    },
    userInfo: {
        marginLeft:'50%'
    },
    userImg: {
        width:'25rem',
        height:'25rem',
        position:'absolute',
        marginTop:'-13rem'
    }
  }))


function WatchResume(props) {
    const classes = useStyles();
    const {fio,about,age,phone,email,img} = props;
    const [images,setImages] = useState('')
    

    return (
        <div className={classes.main}>
            <h2 className={classes.userInfo}>{fio}</h2>
            <h3 className={classes.userInfo}>{about}</h3>
            <div className={classes.userInfo}>{age}</div>
            <h4 className={classes.userInfo}>{phone}</h4>
            <h4 className={classes.userInfo}>{email}</h4>
            <img src={img} className={classes.userImg} />
        </div>
    )
}

export default WatchResume;