import React, { useState } from 'react';

const Rectangulo = () => {

    
    function getRandomColor(){
        let red = Math.random()*256;
        let green = Math.random()*256;
        let blue = Math.random()*256
        return `rgb(${red},${green},${blue})`
    }


    const [mostrarColor, setMostrarColor] = useState(false);  


    return (
        <div onMouseEnter={()=> setMostrarColor(true)}
            onMouseLeave={()=> setMostrarColor(false)}
            onDoubleClick={()=>setMostrarColor(false)}
            style={{ width:'255px', height:'255px',
            backgroundColor : mostrarColor ? getRandomColor() : 'black'
            }}>
    
        </div>
    );
}

export default Rectangulo;
