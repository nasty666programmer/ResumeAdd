import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import ListResume from './Panel/ListResume';

function Main(props) {
    return (
        <Router>
        <div>
            <button onClick={props.LogOut}>Exit</button>
            <nav>
                <Link to='/allResume'><span>Show all resume</span></Link>
            </nav>

            <Switch>
                <Route path='/allResume'>
                    <ListResume />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default Main;