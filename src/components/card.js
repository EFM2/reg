import styled from "styled-components"


const Div = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        border:solid 2px lightgray;
        width:200px;
        height:300px;
        margin:50px;
        position:relative;

`
const Img = styled.img`

width:197px;
        height:130px;
        margin-bottom:20px;

`
const Badge= styled.span`
    position:absolute;
    right:0px;
    background-color:black;
    color:white;
    padding: 2px 8px;
    margin:5px;
    border-radius:7px;
`
export default function Card(props){
    return(<Div>
        <Img src="img_placeholder.png"/>
        
        <h4>{props.item.name}</h4>
        {props.item.sale?<><Badge>sale</Badge><p><del>{props.item.oprice}</del>{props.item.price}</p></>:<p>{props.item.price}</p>}
        <button>add to cart</button>
    </Div>)
}