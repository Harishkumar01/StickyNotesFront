import React from 'react';
import Posts from '../posts/Posts';
import {Link} from 'react-router-dom'

const Home = () => (
    <div>
        <div className="jumbotron">
        <h1 style={{fontFamily: "Italic",color: "#000000"}}>
            Stciky Notes
        </h1>
        </div>
        <div className="container">
        <br />
        <div className="alert alert-dark">
                Create your own <Link className="dark" to ="/post/create">Posts</Link>
        </div>
        </div>
        <div className="container">
            <Posts />
        </div>
    </div>
);
export default Home;