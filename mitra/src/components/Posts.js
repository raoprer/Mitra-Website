import React from 'react';
import PostCard from './PostCard';

const Posts = (props) => {
    const RenderPost = props.postContent.map((postContent)=>{ 
        return (
            <PostCard postContent={postContent}/>
        )
    })
    return (
        <div className='right-pane'>
            <div className='row p-3'>{RenderPost}</div>
        </div>
    )
}

export default Posts;