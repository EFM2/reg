import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArticle } from "../actions/articleAction";
import { connect } from "react-redux";
import HeaderB from "./headerBody";
import Body from "./body";




/* function AddArticle(){
const [title, setTitle]=useState()
const dispatch = useDispatch()
function handleSubmit(e){
    e.preventDefault()
    const newArticle = {id:Math.floor(Math.random()*100),title}
    dispatch(addArticle(newArticle))
}
    return(<>
        <h2>ajouter article</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>{
                setTitle(e.target.value)}}/>

            <input type="submit" value="ajouter"/>
        </form>
    </>)
}
export default AddArticle; */
function AddArticle(props){
    const [title, setTitle]=useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        const newArticle = {id:Math.floor(Math.random()*100),title:title.trim()}
        props.ajouter(newArticle)
        setTitle("")
    }
        return(<>
            <HeaderB titre="Ajouter article"/>
            <Body>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e)=>{
                    setTitle(e.target.value)}} placeholder="Title..."/>
    
                <input type="submit" value="ajouter" disabled={!title.trim()}/>
            </form></Body>
        </>)
    }
    const mapDispatchToProps = (dispatch)=>{
        return{
            ajouter:(a)=>dispatch(addArticle(a))
        }

    }
    export default connect(null,mapDispatchToProps) (AddArticle);