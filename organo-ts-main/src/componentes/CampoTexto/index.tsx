import './CampoTexto.css'

interface CampoDeTextoProps{
    aoAlterado: (valor: string)=>void,
    placeholder: string,
    label: string,
    valor: string,
    obrigatorio?: boolean
    tipo?: "text"|"password"|"date"|"email"|"number"
}

const CampoTexto = ({aoAlterado,placeholder,label,valor,obrigatorio = false, tipo= "text"}: CampoDeTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} type={tipo}/>
        </div>
    )
}

export default CampoTexto