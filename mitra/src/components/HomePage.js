import React from 'react';

const HomePage = () => {
    return (
        <div style={{marginLeft:"280px"}}>
            <div id="circle-1" class="rounded-circle position-absolute scale-up-center"></div>
            <div id="circle-2" class="rounded-circle position-absolute scale-up-center delay-2"></div>
            <div id="circle-3" class="rounded-circle position-absolute scale-up-center delay-4"></div>        
        </div>
    )
}

export default HomePage;