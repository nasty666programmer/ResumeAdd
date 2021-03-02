import './App.css';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import FormsResume from './Components/FormsResume';
import Login from './Components/auth/Login';
import {addResume} from './Components/redux/reducers/action';
import axios from 'axios';
import {connect} from 'react-redux';
import { useEffect, useState } from 'react';



function App(props) {
  const [apiResult,setApiResult] = useState([])

  //console.log(!!props.data)

  useEffect(() => {
    if(props.data.length == 0 ) {
    axios.get('https://5f34067b9124200016e185b4.mockapi.io/resume')
    .then(res => props.addResume(res.data))
    .catch(err => console.log(err))
    }
  },[])

  return (
    <Router>
    <div>
        <h3>Welcome</h3>
        <nav>
        <Link to='/forms'><span>Create Resume</span></Link>
          <Link to='/admin'><span>Admin Panel</span></Link>
        </nav>

        <Switch>
          <Route path='/forms'>
            <FormsResume />
          </Route>
          <Route path='/admin'>
            <Login/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}


const mapDispatchToProps = {
  addResume
}

const mapStateToProps = state => {
  return {
    data:state.resume.resume
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
