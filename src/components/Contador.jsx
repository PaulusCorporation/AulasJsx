import React, { useState } from 'react'


const Contador = () => {
    const [contador, setContador] = useState(1)
    function incrementarContador(){
        setContador(contador+1)

    }
    function decrementarContador(){
        setContador(contador-1)

    }


  return (
    <div>
        <h1>O contador está em :{contador} </h1>
        <button onClick={incrementarContador}>Adicionar mais 1</button>
        <button onClick={decrementarContador}>Decrementar 1</button>
    </div>
  )
}

export default Contador