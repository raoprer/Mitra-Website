import React from 'react';
import Features from './Features';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <section class="header">
                <div class="container-fluid align-items-center justify-content-between right-pane" style={{minHeight:"100vh"}}>
                    <h1><strong>Hey,<br></br>Mitra</strong></h1>
                </div>
                <div className='right-pane'>
                    <Features/>
                    <Footer/>
                </div>
            </section>
            {/* <div id="circle-1" class="rounded-circle position-absolute scale-up-center"></div>
            <div id="circle-2" class="rounded-circle position-absolute scale-up-center delay-2"></div>
            <div id="circle-3" class="rounded-circle position-absolute scale-up-center delay-4"></div>         */}
        </div>
    )
}

export default HomePage;