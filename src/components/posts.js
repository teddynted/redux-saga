import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPosts, requestDelete } from '../actions/index';
import './posts.css'; 

class Posts extends Component {
    constructor(props){
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }
    componentWillMount(){
        this.props.requestPosts();
    }
    deletePost(e, id){
       e.preventDefault();
       let confirm = window.confirm('Are you want to delete this record?');
       confirm ? this.props.requestDelete(id) : null;
    }
    listPosts(posts){
        if( posts.length > 0 ) {
            let row = posts.map( ( item, index ) => {
                return <tr key={index}><td>{index + 1}</td><td><Link className="posts-link" to={ "/edit-post/" + item._id }><span className="fa fa-pencil"></span></Link></td><td><a onClick={ (e) => this.deletePost( e, item._id ) } className="posts-link"><span className="fa fa-trash-o"></span></a></td><td>{item.title}</td><td>{item.excerpt}</td><td>{item.body}</td></tr>
            });
            return (<table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Title</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Body</th>
                </tr>
            </thead>
            <tbody>{row}</tbody>
            </table>);
       }
    }
    render(){
        return (
            <div className="col-lg-12">
                {this.listPosts(this.props.posts)}
            </div>);
    }
}

const mapStateToProps = ({posts}) => ({posts});

const mapDispatchToProps = dispatch => bindActionCreators( { requestPosts, requestDelete }, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Posts);