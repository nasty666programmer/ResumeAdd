import React from 'react';

function WatchResume(props) {
    const {firstName,lastName,job,phone,email,country} = props;

    return (
        <div style={{border:'solid 1px black',position:'absolute', zIndex:'2',marginLeft:'40%',width:'30rem',height:'20rem',textAlign:'center'}}>
            <h5>{firstName}</h5>
            <h5>{lastName}</h5>
            <div>{job}</div>
            <h5>{phone}</h5>
            <h5>{email}</h5>
            <h5>{country}</h5>
        </div>
    )
}

export default WatchResume;