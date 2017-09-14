import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

// CONPONENTS
import Posts from './components/posts';
import PostsItem from './components/posts_item';
import Profile from './components/profile';
import NotFound from './components/404'

class App extends Component {
    render() {
        return (
            <div>home</div>
        )
    }
}

ReactDOM.render(
    //CAN USER HashRouter OR MemoryRouter
    <BrowserRouter>
        <div>
            <header>
                <NavLink exact to="/" activeClassName="selected">Home</NavLink><br/>
                <NavLink to="/posts" activeClassName="selected">Posts</NavLink><br/>
                <NavLink to="/profile" activeClassName="selected">Profile</NavLink><br/>
                <hr/>            
            </header>
            <Switch>
                <Route path="/posts/:id" component={PostsItem}></Route>
                <Route path="/posts" component={Posts}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route exact path="/" component={App}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </div>
    </BrowserRouter>
, document.getElementById("root"));