import React,{Component} from 'react';
export default class Paragraph extends Component {
render(){
    const {text} = this.props;
    return(
        <>
        <h1 className ="historia">{text}</h1>
        </>
    )
}
}