import React, {Component} from 'react';
export default class Options extends Component {
   render(){
       const {optionA, optionB, handleClick} = this.props;
       return(
           <div className='opciones'>
                <div className='opcion'>
                    <button id='A' className='botones' onClick={handleClick}>A</button>
                    <h2>{optionA}</h2>
                </div>

                <div className='opcion'>
                    <button id='B' className='botones' onClick={handleClick}>B</button>
                    <h2>{optionB}</h2>
                </div>
           </div>
       )
   } 
}