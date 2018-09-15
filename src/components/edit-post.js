import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestPost, updatePost } from '../actions/index';

class EditPost extends Component {
    constructor(props){
        super(props);
        this.state = { id: '', title: '', excerpt: '', body: '' };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        let param = this.props.location.pathname, id = param.substring( param.lastIndexOf('/') + 1, param.length );
        this.props.requestPost(id);
        const fields = () => this.setState({ title: this.props.post.title, excerpt: this.props.post.excerpt, body: this.props.post.body, id: this.props.post._id })
        setTimeout(fields.bind(this), 100);
    }
    handleOnChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.updatePost({ "id": this.state.id, "title": this.state.title, "excerpt": this.state.excerpt, "body": this.state.body });
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="col-md-12">
                <h2>Edit Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" id="postTitle" onChange={this.handleOnChange} value={this.state.title} placeholder="Post Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="excerpt" className="form-control" id="postExcerpt" onChange={this.handleOnChange} value={this.state.excerpt} placeholder="Post Excerpt" />
                    </div>
                    <div className="form-group">
                        <textarea name="body" className="form-control" id="postBody" placeholder="Post Body" onChange={this.handleOnChange} value={this.state.body} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({post}) => ({post});

const mapDispatchToProps = dispatch => bindActionCreators( { requestPost, updatePost }, dispatch);

export default withRouter(
    connect( mapStateToProps, mapDispatchToProps)(EditPost)
);