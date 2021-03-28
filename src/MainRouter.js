import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Users from './user/Users';
import NewPost from './posts/NewPost';
import SinglePost from './posts/SinglePost';
import DeletePost from './posts/DeletePost';
import EditPost from './posts/EditPost';

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route exact path="/post/create" component = {NewPost}/>
            <Route exact path="/post/:postId" component = {SinglePost}></Route>
            <Route exact path="/post/edit/:postId" component = {EditPost}/>
            <Route exact path="/post/delete/:postId" component = {DeletePost}/>
            <Route exact path="/users" component = {Users}></Route>
            <Route exact path="/signup" component = {Signup}></Route>
            <Route exact path="/signin" component = {Signin}></Route>
        </Switch>
    </div>
)

export default MainRouter;