import { useState } from "react";

function pruebaHD(){
    const [aux,setAux] = useState(0);
    function handleState(){
        setAux(aux + 1);
    }

    return (
        <>
        <h1>Prueba de useState:</h1>
        <button onClick={handleState}>El useState: {aux}</button>
        </>
    );
}

export default pruebaHD;