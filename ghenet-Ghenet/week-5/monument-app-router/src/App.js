 import React, { Component } from 'react';
 import './App.css';
 import Index from './Index/Index';
 import Blog from './Blog/Blog'

 class App extends Component {
   render() {
     return (
       <div className="App">
           <Index />
           <Blog />
       </div>
     );
   }
 }
 
 export default App;
 