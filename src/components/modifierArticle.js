import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArticle } from "../actions/articleAction";
import HeaderB from "./headerBody";
import Body from "./body";

function ModifierArticle(){
    const articles = useSelector(data => data.articles)

    const [articleId, setArticleId]=useState("")
    const article = useSelector(data => data.articles.find((article)=>article.id==articleId))

    const [content, setContent]=useState("")
const dispatch = useDispatch()
useEffect(() => {
    setContent(article ? article.title : "");
  }, [article]);
function handleSubmit(e){
    e.preventDefault()
    
    dispatch(updateArticle(articleId,content))
    setArticleId("")
    setContent("")
    
}
console.log(articles)
return(<>
                    <HeaderB titre="Modifier article"/>
                    <Body>
        <form onSubmit={handleSubmit} style={{ display:"flex" }}>
            <select onChange={(e)=>{setArticleId(e.target.value)}} value={articleId}>
            <option value={""}>Select an article...</option>
                {articles.map((article,index)=>{
                    
                    return(<option key={index} value={article.id}>Article {article.id}</option>)
                })}
            </select>
            
            <textarea onChange={(e)=>setContent(e.target.value)} 
                        value={content}
                        cols={40}></textarea>
                
            <input type="submit" value="modifier" disabled={!articleId}/>
        </form></Body>
    </>)
}
export default ModifierArticle;





