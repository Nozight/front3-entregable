import React,{Component} from 'react';

export default class ChoiceRecord extends Component{
    render(){
        const {prevDeci, records} = this.props;
        return(
            <div className='recordatorio'>
                <h3>Selección anterior: {prevDeci} </h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>{records}</ul>
            </div>
        )
    }
}