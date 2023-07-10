import React,{Component} from 'react';
import './App.css';
import Comp from './components/Comp.js';
import Comp2 from './components/Comp2.js';

class App extends Component{
  render(){
    return(
      <div>
        <Comp/>
        <Comp2/>
      </div>
    );
  }
}

export default App;
