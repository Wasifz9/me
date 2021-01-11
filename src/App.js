import React, {Component} from 'react';
import './App.css';
import Content from './Content.js';

class App extends React.Component {

constructor(props){
super([props]);
this.state = {
    choice: 'about',  
    appearHome: true,
}
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
            <li className = "headtit"><a className = { this.state.choice == 'about' ? "selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'about'})}>about</a></li>

            <li className = "headtit"><a className = { this.state.choice == 'work experience' ? "selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'work experience'})}> experience </a></li>

            <li className = "headtit"><a className = { this.state.choice == 'contact' ? "selected" : "unSelected-title" }
            onClick={() => this.setState({choice: 'contact'})}>contact</a></li>
          </ul>

        </header>
       
          <header className="App-content">
              <Content choice = {this.state.choice}/>
          </header>
         
      </div>
    );
  }
}

export default App;
