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
                <a href="https://www.linkedin.com/in/wasif-zulkernine-17a527145/">
                    <div class="card" >
                        <div class="face face1">

                            <div class="content">
                                <div class="icon" >
                                    <i class="fa fa-linkedin-square" aria-hidden="true"  href="https://www.linkedin.com/in/wasif-zulkernine-17a527145/" ></i>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3>
                                    <a>Wasif Zulkernine</a>
                                </h3>
                                <p>This is where I network and build my professional protfolio. Let's connect! </p>
                            </div>
                        </div>
                    </div>
                    </a>
                   
                    <div class="card">
                    <a  href="mailto:wasif.zulkernine@mail.utoronto.ca" target="_blank">
                        <div class="face face1" style = {{background: 'rgb(9, 132, 214)'}}>
                            <div class="content">
                                <div class="icon">
                                    <i class="fa fa-mail-forward" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <h3>
                                    <a>wasif.zulkernine@mail.utoronto.ca</a>
                                </h3>
                                <p>Shoot me an email and let's talk technology! </p>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </body>
        );
    }    
}
    

export default Contact;