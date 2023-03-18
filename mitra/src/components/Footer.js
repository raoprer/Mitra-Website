import React from 'react';

const Footer = () => {
    return (
        <div>
            <section>
                <div className='bg-gradient'>
                    <div className='row p-3'>
                        <div className='col-md-4'>
                            Location API here    
                        </div>
                        <div className='col-md-4'>
                            Location:<br/> 
                            <i class="fa-solid fa-location-dot"></i> Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            Curabitur efficitur,
                            massa id mauris                     
                        </div>
                        <div className='col-md-4'>
                            Links:<br/>
                            <i class="fa-solid fa-envelope"></i> mitra@email.com<br/>
                            <i class="fa-brands fa-instagram"></i> your.mitra<br/>
                            <i class="fa-brands fa-facebook"></i> Your Mitra<br/>
                            <i class="fa-brands fa-twitter"></i> your.mitra<br/>
                        </div>
                    </div>
                    <hr/>
                    <div className='row p-3 text-center' style={{fontSize:'12px'}}>Copyright © 2023 All rights reserved |  Made by 10X-Pawns</div>
                </div>
            </section>
        </div>
    )
}

export default Footer;