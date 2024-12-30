import React from 'react'
import styles from './Entrada.module.css'
import { Link } from "react-router-dom";


function Entrada({id, imagem}){
return (
  <Link className={styles.img} id={id}>
       <img src={imagem} alt={id} className={styles.imgContent} />
  </Link>
)
}

export default Entrada