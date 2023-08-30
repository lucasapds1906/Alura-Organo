import './Colaborador.css'

const Colaborador = ( {nome, cargo, imagem, corDeFundo} ) => {
    return(
        
        <div className='colaborador'>
        <div style={{backgroundColor: corDeFundo}} className='colaborador-top'>
            <img src={imagem} alt=''/>
        </div>
        <div className='colaborador-bottom'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
        </div>
    )
}

export default Colaborador