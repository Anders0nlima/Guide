import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../subComponents/Logo'
import logo from '../componets/imagem/logo3.jpeg'

function NavBar(){
    return(
        <div className={styles.list}>
           <Logo id="logo" imagem={logo} to="/teste-router"  className={styles.logo}/>

           <div className={styles.centerLinks}>
           <Link className={styles.item} to="/#">Login</Link>
           <Link className={styles.item} to="/teste-router">Feedback</Link>
           <Link className={styles.item} to="/registrar">Suporte</Link>
           <Link  className={styles.item} to="/login">Idioma</Link>
           </div>


           <div className={styles.rightLinks}>
           <Link className={styles.item} to='/detalhes'>Sobre</Link>
           <Link className={styles.item} to='/detalhes'>API</Link>
           </div>
          

        </div> 
    )
}

export default NavBar