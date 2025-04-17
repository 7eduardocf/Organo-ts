import './CampoTexto.css'
import React from "react"

interface CampoDeTextoProps{
    aoAlterado: (valor: string)=>void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio: boolean
}

const CampoTexto = (props: CampoDeTextoProps) => {

    const placeholderModificada = `${props.placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto