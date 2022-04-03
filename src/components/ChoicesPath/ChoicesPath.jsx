import React from 'react';

//EXPORTAR CORRECTAMENTE
 const ChoicesPath = (element) =>{
    const id = element.target.id;
    const counter = this.state.counter;
    const maxIterations = 7;
    const lastDeci = this.state.lastDeci;
    
    if(counter >= maxIterations ){//el contador es utilizado para iterar los elementos de un objeto, 
        alert("Fin")              //maxIterations es definido por el fin del objeto
    }
    //LOGICA de deciciones
    else if (id === "A"  && lastDeci !== "A"){//Si es A, pero la ultima decision no tiene que ser distinta de A(tiene que ser la primera)
        this.setState({
                counter: counter + 1,         //Asi solo avanza un elemento del objeto (Definido por la cantidad de opciones)
                lastDeci:"A"
            });
    }else if (id === "A" && lastDeci === "A") {//Si es A, pero la la ultima decision tambien es A
        this.setState({
            counter:counter+2,//Avanza 2 para mantenerse en A
            lastDeci:"A"
        })
    }else if (id === "B" && (lastDeci === null||lastDeci ==="B")) {//Si es B, pero es la primera
        this.setState({
            counter:counter+2,//Avanza 2 para llegar a la primera B
            lastDeci:"B"
        })
    }else if (id === "B" && lastDeci === "A") {//Si no es la primera vez de B
        this.setState({
            counter:counter+3,//Avanza 3 para ir al siguiente ser y quedar en B
            lastDeci:"B"
        });
    }
}