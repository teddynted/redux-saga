import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import posts from './posts';
import EditPost from './edit-post';
import AddPost from './add-post';
import './header.css';

class Header extends Component {
    render(){
        return(
           <div>
                <div className="col-lg-12">
                   <nav className="navbar navbar-default">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand bold color" to="/">Redux Sagas</Link>
                      </div>
                      <div id="navbar" className="navbar-collapse collapse">
                         <ul className="nav navbar-nav navbar-right main-nav">
                             <li><Link className="link active color" to="/">Posts</Link></li>
                             <li><Link className="link color" to="/add-post">New Post</Link></li>
                         </ul>
                      </div>
                    </nav>
                </div>
                <div className="col-lg-12">
                    <Route exact path="/" component={posts} />
                    <Route path="/edit-post/:id" component={EditPost} />
                    <Route path="/add-post" component={AddPost} />
                </div>
           </div>
        );
    }
}

export default Header;