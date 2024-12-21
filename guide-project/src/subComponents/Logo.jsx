import React from 'react'
import styles from './Logo.module.css'
import { Link } from "react-router-dom";


function Logo({id, imagem, to}){
return (
   <Link className={styles.img} id={id} to={to} type="button">
     <img src={imagem} alt={id} className={styles.imgContent} />
   </Link>
)
}

export default Logo