import React from 'react';
import chat from '../images/chat.svg';
import post from '../images/post.svg';
import socialize from '../images/socialize.svg';

const Features = () => {
    return (
        <div>
            <section className=' right-pane-white container-fluid '>
                <div className='row'>
                    <h2>I'll be there for you</h2>
                </div>
                <div className='row'  style={{textAlign:"center"}}>
                    <div className='col-lg-4  p-4'>
                        <img className='img-fluid pb-3' src={chat} aria-hidden alt="React Image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus elit a quam pharetra, at hendrerit massa mattis. Sed quis pulvinar neque.</p>
                    </div>
                    <div className='col-lg-4  p-4'>
                        <img className='img-fluid pb-3' src={post} aria-hidden alt="React Image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus elit a quam pharetra, at hendrerit massa mattis. Sed quis pulvinar neque.</p>
                    </div>
                    <div className='col-lg-4  p-4'>
                        <img className='img-fluid pb-3' src={socialize} aria-hidden alt="React Image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent maximus elit a quam pharetra, at hendrerit massa mattis. Sed quis pulvinar neque.</p>
                    </div>
                </div>
            </section>    
        </div>
    )
}

export default Features;