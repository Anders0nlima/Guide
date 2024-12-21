import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./paginas/HomePage"
import RegisterPage from "./paginas/RegisterPage"
import LoginPage from "./paginas/LoginPage"
import GuideDetails from "./paginas/GuideDetailsPage"



function AppRoutes(){
 return(
   <BrowserRouter> 
      <Routes>
        <Route path="/Guide" element={<HomePage/>}>

        </Route>

        <Route path="/registrar" element={<RegisterPage/>}>

        </Route>

        <Route path="/login" element={<LoginPage/>}>

        </Route>

        <Route path="/detalhes" element={<GuideDetails/>}>

        </Route>

      
      </Routes>
   </BrowserRouter>

 )
}

export default AppRoutes