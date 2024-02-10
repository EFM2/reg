 import { connect,useSelector,useDispatch } from "react-redux";
import { Incrementer,Decrementer,Reset } from "./actions/action";
import { BrowserRouter } from "react-router-dom";
 function AppR(props){
/*     const num = useSelector(data=>data.num)
    const dispatch = useDispatch() */
    return(
    <>
<div>{props.num/* num */}</div>
<button onClick={props.inc/* ()=>dispatch(Incrementer(5)) */}>Incrementer</button>
<button onClick={props.dec/* ()=>dispatch(Decrementer()) */}>Decrementer</button>
<button onClick={props.res/* ()=>dispatch(Reset()) */}>Reset</button>


    
    </>)
}
/* const mapDispatchToProps = (dispatch)=>{
    return {
        inc:()=>dispatch({type:'Incrementer'}),
        dec:()=>dispatch({type:'Decrementer'}),
        res:()=>dispatch({type:'Reset'})
    }
} */
const mapDispatchToProps = (dispatch)=>{
    return {
        inc:()=>dispatch(Incrementer()),
        dec:()=>dispatch(Decrementer()),
        res:()=>dispatch(Reset())
    }
}
 const mapStateToProps = (state)=>{
    return {num: state.num}
}

export default connect(mapStateToProps,mapDispatchToProps)(AppR); 
/* export default AppR; */