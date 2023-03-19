import React from 'react';
import bg from '../images/chatbot.jpg'
import PostCard from './PostCard';

const Posts = (props) => {
    const RenderPost = props.postContent.map((postContent)=>{ 
        return (
            <PostCard postContent={postContent}/>
        )
    })
    return (
        <div>
            <div className='left-pane header'>
            </div>
            <div className='right-pane'>
                <div className='row p-3'>{RenderPost}</div>
            </div>
        </div>
    )
}

export default Posts;