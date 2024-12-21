import Img from '../subComponents/Img'
import styles from './Footer.module.css'
import login from '../componets/imagem/login3.jpeg'
import blog from '../componets/imagem/blog3.jpeg'
import calendario from '../componets/imagem/calendario3.jpeg'
import gamifica from '../componets/imagem/gamificação3.jpeg'
import guide from '../componets/imagem/guia3.jpeg'
import mapa from '../componets/imagem/mapa3.jpeg'


function Footer(){
  return(
    <div className={styles.principal}>

            <div className={styles.espacoLinks}>

                <div className={styles.link}>

                   <div className={styles.botao}>
                   <Img id="login" imagem={login} to="/login" />
                     
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Login</strong></p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="game" imagem={gamifica} to="/game" />
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Gamificação</strong></p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="agenda" imagem={calendario} to="/agenda" />
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Agenda</strong></p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="mapa" imagem={mapa} to="/mapa" />
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Mapa</strong></p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="guide" imagem={guide} to="/guide" />
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Torne-se Guia</strong></p>
                  </div>

                </div>

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="blog" imagem={blog} to="/blog" />
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Blogs</strong></p>
                  </div>

                </div>

           


        </div>

    </div>
  )
}

export default Footer