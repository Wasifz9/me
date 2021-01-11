import React, {Component} from 'react';
import './Contact.css';

class Contact extends React.Component {

    render () {
        return(
            <body>
                      <div className = "home">
                    <p className = "info"> <br/> <br/> Thanks for visiting my site! I'd love to chat more about working with you. <br/> <br/> Let's get in touch!
                    <br/> 
                    </p>
                    </div>
                    <div className = "actions">
                    </div>
                <div class="container">
                    
                    <div class="card" >
                        <div class="face face1">

                            <div class="content">
                                <div class="icon" >
                                <a href="https://www.linkedin.com/in/wasif-zulkernine-17a527145/" target="_blank"></a>
                                    <i class="fa fa-linkedin-square" aria-hidden="true"  href="https://www.linkedin.com/in/wasif-zulkernine-17a527145/" ></i>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3>
                                    <a className = "clicker" href="https://www.linkedin.com/in/wasif-zulkernine-17a527145/" target="_blank">Wasif Zulkernine</a>
                                </h3>
                                <p>This is where I network and build my professional protfolio. Let's connect! </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                                <div class="icon">
                                    <i class="fa fa-mail-forward" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3>
                                    <a className = "clicker" href="mailto:wasif.zulkernine@mail.utoronto.ca" target="_blank">wasif.zulkernine@mail.utoronto.ca</a>
                                </h3>
                                <p>Shoot me an email and let's talk technology! </p>
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        );
    }    
}
    

export default Contact;