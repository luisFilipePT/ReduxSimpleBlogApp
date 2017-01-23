/**
 * Created by luis on 13/01/2017.
 */
import React, { Component } from 'react';

// Imports needed fro promoting component to container
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


class PostIndex extends Component {

    // before being rendered and only called once
    componentWillMount() {
        this.props.fetchPosts();
        console.log('this would be a good time to call action creator');
    }

    renderPosts() {
        return this.props.posts.map((post) => {
           return (
             <li className="list-group-item" key={ post.id }>
                 <Link to={"posts/" + post.id}>
                    <span className="pull-xs-right">{ post.categories }</span>
                    <strong>{ post.title }</strong>
                 </Link>
             </li>
           );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
            </div>
        );
    }
}


// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch)
// }

function mapStateToProps(state) {
    return {posts: state.post.all};
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);