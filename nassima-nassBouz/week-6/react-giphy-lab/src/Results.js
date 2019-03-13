import React , { Component } from 'react';

class Results extends Component {
    render(){
        return(
            <div className="container">
               <h2>{props.result.title}</h2>
                <img className="card-img-top"
                src={props.result.images.fixed_height.url} 
                alt={props.result.titl}/>
            </div>
        )
    }
}

export default Results 




  