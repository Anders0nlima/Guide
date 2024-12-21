import Banner from '../subComponents/Banner'
import styles from './Conteudo.module.css'
import imagemPrinciapal from './imagem/imagemPrincipal.jpeg'


function Conteudo(){
    return(
        <>
            <div className={styles.banner}>
             <Banner id="imagemprincipal" imagem={imagemPrinciapal} title="Bem-vindo ao Guide" descripiton="Aqui você encontra as melhores ofertas"/> 
            </div>
       </>

    )
}

export default Conteudo