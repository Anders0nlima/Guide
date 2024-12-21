import React from 'react'
import styles from './Img.module.css'
import { Link } from "react-router-dom";


function Img({id, imagem, to}){
return (
   /*<Link className={styles.img} id={id} to={to} type="button" style={{backgroundImage: `url(${imagem})`}}></Link>*/

   <Link className={styles.img} id={id} to={to} type="button">
     <img src={imagem} alt={id} className={styles.imgContent} />
   </Link>
)
}

export default Img