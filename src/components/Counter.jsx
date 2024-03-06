import React from "react";
import '../styleSheets/counter.css'

function Counter ({ numeroClics }){
    
    return(
        <div className="contenedor-contador"> 
            {numeroClics}
        </div>
        
    )
}

export default Counter;