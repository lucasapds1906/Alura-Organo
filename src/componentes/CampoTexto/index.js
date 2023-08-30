import './CampoTexto.css'

const CampoTexto = (props) => {

    // QUALQUER MUDANÇA QUE ACONTECE NO CAMPO TEXTO (onChange)
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={aoDigitar}
                required={props.obrigatorio}
                placeholder={props.placeholder}>
            </input>
        </div>
    )
}

export default CampoTexto