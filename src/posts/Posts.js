import React , {Component} from 'react';
import { List } from "./apiPosts";
import {Link} from 'react-router-dom';

class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount () {
        List().then(data => {
            console.log(data)
            console.log("hi")
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({posts: data})
            }
        })
    }


    renderPosts = (posts) => {
        return (
        <div className="row">
            {posts.map((post, i) => {
                const posterId = post.postedBy ? `/user/${post.postedBy._id}` : ""
                const posterName = post.postedBy ? post.postedBy.name : "Unknown"
                return (
                    <div className="card col-md-4" key = {i}>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body.substring(0,50)}...</p>
                            <br />
                            <p className="font-italic mark">
                                posted by <Link to={`${posterId}`}>{posterName}</Link>{" "}
                                on {new Date(post.created).toDateString()}
                            </p>
                            <Link to={`/post/edit/${post._id}`} className="btn btn-raised btn-dark bt-sn">Edit Post</Link>
                            <Link to={`/post/delete/${post._id}`} className="btn btn-raised btn-danger">Delete Post</Link>
                        </div>
                    </div>  
                )              
            } )}
        </div>
        )
    }

    render() {

        const {posts} = this.state;
        return (
            <div className = "container">
                <h2 style={{fontFamily: "Italic"}} className = "mt-5 mb-5">{!posts.length ? "Loading..." : "Recent Posts" }</h2>
                {this.renderPosts(posts)}
            </div>
        )
    }
}

export default Posts;