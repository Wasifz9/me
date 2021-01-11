import React, {Component} from 'react';
import './WorkExperience.css';
class WorkExperience extends React.Component {

    render () {
        return (
            <div className = 'everything1'>
                <div className = 'section'>
                    <p className = 'subtitle'>
                        RBC Analytics and Innovation
                    </p>
                    <p className = 'jobtitle'>
                        software engineer
                    </p>
                    <p className = 'subsubtitle'>
                        summer '20
                    </p>
            
                                <p className ='info'>
                                     <li>Built Jenkins pipeline to operate with Vault secrets to ensure secure automation and secret management.</li>
                                     <li>Configured Master Jenkins to control Jenkins Agents on different operating systems.  </li>  
                                     <li>Containerized Portfolio Insights application on Docker and deployed on Openshift. </li> 
                                     <li>Trained in both AWS and Kubernetes while documenting for team use on Confluence. </li>  
                                     <li>Presented secret management strategy to senior management and documented Vault tutorial for team use.</li>  
                                </p>



            </div>
            <div className = 'section'>
            <p className = 'subtitle'>
                Government of Ontario
            </p>
            <p className = 'jobtitle'>
                software developer/tester
            </p>
            <p className = 'subsubtitle'>
                summer '19
            </p>
                        <p className ='info'>
                                     <li>Automated long-standing manual tests using
                                    Visual Basic and UFT.</li>
                                <br/>
                                <li> Worked with SQL developers on database
                                    architecture.</li>
                                <br/>
                                <li>   Trained testers to adapt to the new
                                    automation tools to optimize their testing.</li>

                        </p>

            </div>      
            <div className = 'section'>                       
            <p className = 'subtitle'>
                Government of Ontario
            </p>
            <p className = 'jobtitle'>
                software tester
            </p>
            <p className = 'subsubtitle'>
                summer '18
            </p>
                        <p className ='info'>
                        <li>Reviewed Design Specs with Business Analysts
                                    to communicate logic requirements to developers. </li>
                                <br/>
                                <li>Designed and executed tests on Curam interface
                                    and Cognos reports based on client- generated
                                    specifications.</li>
                                <br/>
                                <li> Sat in on board meetings where I took meeting
                                    minutes and was introduced to the inner
                                    workings of the ministry.</li>

                        </p>
    
            </div>
             <div className = 'section'>  
            <p className = 'subtitle'>
                LeadMountain 
            </p>
            <p className = 'jobtitle'>
                founder
            </p>
            <p className = 'subsubtitle'>
            summer '19 - current
            </p>

                        <p className ='info'>
                                   <li>Developing websites and online branding for
                                    small businesses.</li> 
                                <br/>
                                <li> Designing pamphlets/advertisements and
                                    various marketing media.</li> 

                                <br/>
                                <li> Helping create business strategy for
                                    companies to implement and promote
                                    growth. </li>              
                        </p>
             </div>          
             <div className = 'section'>           
            <p className = 'subtitle'>
                Kingston Impact
            </p>
            <p className = 'jobtitle'>
                manager
            </p>
            <p className = 'subsubtitle'>
            2013-2017
            </p>
                        <p className ='info'>
                        <li>  Planned, supervised and lead practices</li> 
                                <br/>
                                <li> Managed junior coaching staff, custodial staff
                                    and parental concerns</li> 

                                <br/>
                                <li>    Marketed the league and attracted new
                             customers
                                    growth. </li> 
                        </p>
        </div>

        <a href="mailto:wasif.zulkernine@mail.utoronto.ca"  className="button2" style = {{width: 250 + 'px'}}>Let's Chat!</a>
        </div>
        );
      }    
}
    

export default WorkExperience;

