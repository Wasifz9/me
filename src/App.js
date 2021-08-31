import React, {Component} from 'react';
import './App.css';
import Content from './Content.js';
import WorkExperience from './WorkExperience.js';
import About from './About.js';
import Contact from './Contact.js';

class App extends React.Component {

constructor(props){
  super([props]);
  this.state = {
      choice: '',  
      appearHome: true,
  }
}
componentWillMount(){
  setTimeout(() => {
    this.setState({
      choice: 'about'
    })
  }, 200)
}


toggleAppear = () => {
  this.setState({
    appearHome: !this.state.appearHome
  })
}



render () {
  const{appearHome,choice} = this.state
   
  return (
      <div className="App">
        <header className="App-header">
          <p className = "title"> 
            Welcome! I'm Wasif.
          </p>




          <ul>
            <li className = "headtit"><a className = { this.state.choice == 'about' ? "unSelected-title selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'about'})}>about</a></li>

            <li className = "headtit"><a className = { this.state.choice == 'work experience' ? "unSelected-title selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'work experience'})}> experience </a></li>

            <li className = "headtit"><a className = { this.state.choice == 'contact' ? "unSelected-title selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'contact'})}>contact</a></li>
          </ul>

        </header>
       
          <header className="App-content">
            <div className = { this.state.choice == 'about' ? "hidden show" : "hidden"}>
              <About/>
            </div>

            <div className = { this.state.choice == 'work experience' ? "hidden show" : "hidden"}>
              <WorkExperience/>
            </div>

            <div className = { this.state.choice == 'contact' ? "hidden show" : "hidden"}>
              <Contact />
            </div>

          </header>
          <div className = 'footer'>
          <p className = 'footerText'>  Please visit back soon - my personal site for the recruiting seeason of 2021/2022 is just finishing up construction.  </p>
          </div>
      </div>
    );
  }
}

export default App;
