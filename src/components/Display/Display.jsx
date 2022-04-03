import React, { Component } from 'react';
import data from '../data.json';
import ChoiceRecord from '../ChoiceRecord/ChoiceRecord';
import Options from '../Options/Options';
import Paragraph from '../Paragraph/Paragraph'

const records = [];


export default class Display extends Component{
    constructor(props){
        super(props);
    this.state={
        counter: 0,
        prevDeci:null,
        }
    }
    componentDidUpdate(prevState) {
        if (prevState.counter !== this.state.counter) {
            records.push(this.state.prevDeci);
        }
    }
    choicesPath = (element) =>{
        const id = element.target.id;
        const counter = this.state.counter;
        const maxIterations = 7;
        const prevDeci = this.state.prevDeci;
        
        if(counter >= maxIterations ){//el contador es utilizado para iterar los elementos de un objeto, 
            alert("Fin")              //maxIterations es definido por el fin del objeto
        }
        //LOGICA de deciciones
        else if (id === "A"  && prevDeci !== "A"){//Si es A, pero la ultima decision no tiene que ser distinta de A(tiene que ser la primera)
            this.setState({
                    counter: counter + 1,         //Asi solo avanza un elemento del objeto (Definido por la cantidad de opciones)
                    prevDeci:"A"
                });
        }else if (id === "A" && prevDeci === "A") {//Si es A, pero la la ultima decision tambien es A
            this.setState({
                counter:counter+2,//Avanza 2 para mantenerse en A
                prevDeci:"A"
            })
        }else if (id === "B" && (prevDeci === null||prevDeci ==="B")) {//Si es B, pero es la primera
            this.setState({
                counter:counter+2,//Avanza 2 para llegar a la primera B
                prevDeci:"B"
            })
        }else if (id === "B" && prevDeci === "A") {//Si no es la primera vez de B
            this.setState({
                counter:counter+3,//Avanza 3 para ir al siguiente ser y quedar en B
                prevDeci:"B"
            });
        }
    }
    render(){
        return(
            <>
            
            <Paragraph text={data[this.state.counter].historia }/>
            <Options 
            optionA={data[this.state.counter].opciones.a } 
            optionB={data[this.state.counter].opciones.b}
            handleClick={this.choicesPath}
            />
            <ChoiceRecord
            prevDeci={this.state.prevDeci}
            records={records.map((record,i)=>(
                <li key={i}>{record}</li>
            ))}
            />
            </>
        )
    }
}