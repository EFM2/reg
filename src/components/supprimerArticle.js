import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteArticle } from "../actions/articleAction";
import HeaderB from "./headerBody";
import Body from "./body";

function SupprimerArticle(){
    const [articleId, setArticleId]=useState("")
    const articles = useSelector(data => data.articles)
const dispatch = useDispatch()
function handleSubmit(e){
    e.preventDefault()
    
    dispatch(deleteArticle(articleId))
    setArticleId("")
}

return(<>
        <HeaderB titre="Supprimer article"/>
        <Body>
        <form onSubmit={handleSubmit}>
            <select onChange={(e)=>setArticleId(e.target.value)} value={articleId}>
            <option value={""} >Select an article...</option>
                {articles.map((article,index)=>{
                    
                    return(<option key={index} value={article.id}>Article {article.id}</option>)
                })}
            </select>
                
            <input type="submit" value="delete" disabled={!articleId}/>
        </form></Body>
    </>)
}
export default SupprimerArticle;





