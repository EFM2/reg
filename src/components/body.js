import styled from "styled-components"
import Card from "./card"



const items= [{name:"fancy product",price:"$80.00",sale:false},
                {name:"Special item",price:"$18.00",oprice:"$20.00",sale:true},
                {name:"Sale item",price:"$25.00",oprice:"$50.00",sale:true},
                {name:"Popular item",price:"$40.00",sale:false}]


const Div = styled.div`
        display:flex;
        
        justify-content:space-around;
        margin:20px;

`
export default function Body(props){
    return(<Div>
    {/* {items.map((elt)=><Card item={elt}/>)} */}
        {props.children}
    
    </Div>)
}