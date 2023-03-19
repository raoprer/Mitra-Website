import React from 'react';

const PostCard = (props) => {
    const {id, source, title, coverImg, caption, link} = props.postContent;
    return (
        <div className='col-lg-4 col-sm-6 p-1'>
            <div class="card">
                <img src={coverImg} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{caption}</p>
                    <a href={link} class="btn">View on {source}</a>
                </div>
            </div>
        </div>
    )
}

export default PostCard; 