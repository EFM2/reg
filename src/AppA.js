import { Route, Routes } from "react-router-dom";
import AddArticle from "./components/addArticle";
import ArticleList from "./components/articleList";
import HeaderB from "./components/headerBody";
import HeaderE from "./components/headerEntete";
import ModifierArticle from "./components/modifierArticle";
import SupprimerArticle from "./components/supprimerArticle";
import ChercherArticle from "./components/chercherArticle";
import Footer from "./components/footer";

function AppA(){
    return(<>
        <HeaderE/>
        
        <Routes>
            <Route path="/" element={<AddArticle/>}/>
            <Route path="/ajout" element={<AddArticle/>}/>
            <Route path="/modification" element={<ModifierArticle/>}/>
            <Route path="/suppresion" element={<SupprimerArticle/>}/>
            <Route path="/recherche" element={<ChercherArticle/>}/>

            </Routes>  
        
        <ArticleList/>
        
    </>)
}
export default AppA;