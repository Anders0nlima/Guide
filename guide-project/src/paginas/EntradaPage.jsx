import Entrada from "../subComponents/Entrada"
import LoginPage from "./LoginPage"
import entradaImagem from "../components/imagem/logo3.jpeg"


function EntradaPage (){
    return (
       <div className="entrada-container">

        <div className="entrada-imagem">
           <Entrada id="logo" imagem={entradaImagem}/>
        </div>

        <div className="entrada-login">   
            <LoginPage/>
        </div>

       </div>
    )
}

export default EntradaPage