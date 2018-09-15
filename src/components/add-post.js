import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { newPost } from '../actions/index';
import './add-post.css';

class AddPost extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target), title = data.get('postTitle'), excerpt = data.get('postExcerpt'), body = data.get('postBody');
        this.props.newPost({ "title": title, "excerpt": excerpt, "body": body });
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="col-md-12">
                <h2>Add Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="postTitle" className="form-control" id="postTitle"  placeholder="Post Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="postExcerpt" className="form-control" id="postExcerpt" placeholder="Post Excerpt" />
                    </div>
                    <div className="form-group">
                        <textarea name="postBody" className="form-control" id="postBody" placeholder="Post Body" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators( { newPost }, dispatch);

export default withRouter(
    connect( null, mapDispatchToProps)(AddPost)
);