import React, {Component} from 'react';
import './About.css';

class About extends React.Component {

    render () {
        return (
            <div className = 'everythingelse'>
                <div className = "home">
                    <p className = "info"> <br/> <br/>Hey! I'm a computer engineering student at the University of Toronto looking for an internship for <span className = 'highlighted'> Summer 2021! </span> <br/> I'm interested in the fields of operating systems, machine learning and full-stack development.
                    <br/> </p>
                    <div className = "actions">
                   

                    </div>
                 </div>
                <div className = 'everything'>
                    <div className = 'column'> 
                        <div className = 'bio'>
                            <p className = 'selected1'> 
                                who am i?
                            </p>
                            <p className = "info">
                                Open minded, big-picture thinker. I'm obsessed with solving problems across all fields and topics. I love looking at everyday tasks and finding out how to do them better. 
                                <br/> <br/> 
                            </p>
                            <div className = 'interests'> 
                            <p className = 'selected1'> 
                                interests
                            </p>
                            <p className = "info">
                                I'm pretty interested in a wide variety of things; it depends on the day really. I'm an ex-Gamer, can't get enough music and I am comitted to getting my Chess ELO over, hmm, 1800? I also love fitness/sports, especially basketball, and aspire to master the piano... eventually. 
                                <br/> <br/>

                            </p>
                        </div>
                        </div>
                    </div>

                    <div className = 'column'>
                        <div className = 'toolbox'>
                            <p className = 'selected1'> 
                                tool box
                            </p>



                            <p className = 'subtitle'> 
                            dev ops
                            </p>

                            <p className = "info">
                                jenkins <br/>
                                docker <br/>
                                kubernetes <br/>
                                linux <br/>
                            </p>

                            <p className = 'subtitle'> 
                            machine learning
                            </p>

                            <p className = "info">
                                numpy <br/>
                                tensorflow <br/>
                                pytorch <br/>
                                opencv <br/>
                            </p>

                            <p className = 'subtitle'> 
                            web dev
                            </p>

                            <p className = "info">
                                react <br/>
                                node <br/>
                                HTML/CSS <br/>
                            </p>
                        </div> 
                    </div>
                    <div className = 'column'>
                        <div className = 'interests'> 
                            <p className = 'selected1'> 
                                languages
                            </p>
                            <p className = "info">
                                <span className = 'subselected'> C </span>: Operating Systems <br/> <br/>
                                <span className = 'subselected'> C++ </span> : Google Maps Clone + Coursework <br/> <br/>
                                <span className = 'subselected'> Python </span> : Distracted Driving Detection + Coursework  <br/> <br/>
                                <span className = 'subselected'> Javascript </span> : Freelance + Sidework <br/><br/>
                            </p>
                            <p className = 'selected1'> 
                                resume                           
                            </p>

                            <a href="https://drive.google.com/file/d/1W8kjIKZ4GcFGpfpmepcE039akZ_PWsDP/view?usp=sharing" class="button2">Open</a>
                        </div>
                    </div>
                </div>
                <a href="mailto:wasif.zulkernine@mail.utoronto.ca"  class="button2" style = {{width: 300 + 'px'}}>Let's Chat!</a>
            </div>
        );
      }    
}
    

export default About;
    