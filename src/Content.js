import React, {Componont} from 'react';
import WorkExperience from './WorkExperience.js';
import About from './About.js';
import Contact from './Contact.js';

class Content extends React.Component{
    render(){
            const word = this.props.choice;
            if (word == 'work experience') return <WorkExperience />;
            else if (word == 'about') return <About />;
            else if (word == 'contact') return <Contact />;
            //else return <h1 className = "selected"></h1>

    }
}

export default Content;