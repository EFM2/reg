import { useState } from "react";
import { searchArticle } from "../actions/articleAction";
import { useDispatch } from "react-redux";
import HeaderB from "./headerBody";
import Body from "./body";


function ChercherArticle(){
    const [keyword , setKeyword] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        
        dispatch(searchArticle(keyword.trim()))
        
    }
    return(<>
                    <HeaderB titre="Chercher article"/>
        <Body>
        <form onSubmit={handleSubmit}>
            <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
            <input type="submit" value="cherche"/>
            <input type="submit" value="reset" onClick={()=>setKeyword("")}/>
        </form></Body>
    </>)
}
export default ChercherArticle;