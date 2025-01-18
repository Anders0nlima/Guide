import Img from '../subComponents/Img'
import styles from './Footer.module.css'
import login from '../components/imagem/login3.jpeg'
import blog from '../components/imagem/blog3.jpeg'
import calendario from '../components/imagem/calendario3.jpeg'
import gamifica from '../components/imagem/gamificação3.jpeg'
import guide from '../components/imagem/guia3.jpeg'
import mapa from '../components/imagem/mapa3.jpeg'
import { useState } from 'react'
import LoginPage from '../paginas/LoginPage'


function Footer(){
   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

   const handleOpenModal = () => setIsLoginModalOpen(true);

   const handleCloseModal = () => setIsLoginModalOpen(false);

  return(
    <div className={styles.principal}>

            <div className={styles.espacoLinks}>
                 {/*botao login com modal*/}
                <div className={styles.link}>

                   <div className={styles.botao}>
                   <button onClick={handleOpenModal} className={styles.modalButton}> 
                    <Img id="login" imagem={login}/> </button>

                     
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Login</strong></p>
                  </div>

                </div>

 

                <div className={styles.link}>

                   <div className={styles.botao}>
                     <Img id="game" imagem={gamifica} to="/GamePage"/>
                   </div>

                   <div className={styles.descricao}>
                     <p><strong>Gamificação</strong></p>
                  </div>

                </div>

                {/*Modal para login*/}
                {isLoginModalOpen && (
                  <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                      <button onClick={handleCloseModal} className={styles.closeModal}>
                        fechar
                      </button>

                      <LoginPage/>

                    </div>

                  </div>
                )}

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