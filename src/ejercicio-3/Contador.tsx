import Button from "@mui/material/Button";
import { useState } from "react";

export const Contador=() =>{
    const [contador, setContador] =useState(0);
   
    const incrementar = () => {
    setContador (contador + 1);
    };
    const decrementar = () => {
        setContador (contador -  1);
        };
return (
<div>
    <h3>Contador :{contador}</h3>
    <Button style={{backgroundColor:'red',color:'white',borderRadius:'30px'}} onClick={incrementar}>Incrementar</Button>
    <Button style={{backgroundColor:'green',color:'white',borderRadius:'30px'}} onClick={decrementar}>Decrementar</Button>
</div>
)


};