import React, { Component } from 'react';
import SideBar from './Sidebar/SideBar';
import PostData from '../../../data/posts.json';

class PostList extends Component {
    render() {
        const PostListData = PostData;
        return (
            <div className="post-list">
                <div className="mt-4 mb-4 border-bottom">
                    <h1 className="my-4 page-title text-center">Blog List</h1>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {PostListData.map((PostList, index) => {
                                return (
                                    <div className="card mb-4" key={index}>
                                        <img className="card-img-top" src={PostList.list_image_path} alt="{PostList.title}" />
                                        <div className="card-body">
                                            <h2 className="card-title">{PostList.title}</h2>
                                            <p className="card-text">{PostList.description}</p>
                                            <a href={PostList.url} className="btn btn-primary">Read More →</a>
                                        </div>
                                        <div className="card-footer text-muted">
                                            Posted on {PostList.datePublished.toString()} by <a href="author">{PostList.author.name}</a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-md-4">
                            <SideBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostList;
