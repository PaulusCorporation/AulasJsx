import React from 'react'

const RenderizandoComFuncoes = () => {
 function escolhaDeEstado(siglaDoEstado) {
    if(siglaDoEstado === "PB"){
        return <h1>Paraiba</h1>

    } else{
        return <h3>Outro estado...</h3>
    }
 }

  return (
    <div>{escolhaDeEstado("AM")}</div>
  )
}

export default RenderizandoComFuncoes