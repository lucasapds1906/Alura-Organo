import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <ul>
                <li>
                    <a href='https://facebook.com'>
                        <img src='/imagens/fb.png' alt='Logo do Facebook' />
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com'>
                        <img src='/imagens/tw.png' alt='Logo do Twitter' />
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com'>
                        <img src='/imagens/ig.png' alt='Logo do Instagram' />
                    </a>
                </li>
            </ul>

            <a href='https://github.com/lucasapds1906'>
                <img src='/imagens/logo.png' alt='Logo da Organo' />
            </a>

            <p>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Rodape