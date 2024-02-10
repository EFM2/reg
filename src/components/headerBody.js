import styled from "styled-components"

const Div = styled.div`
    display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:10px;
        background-color:black;
        height:200px;


`

const H1 = styled.h1`
    color:white;


`
    const P = styled.p`
        color:white;


    `

export default function HeaderB(props){
    return(<Div>
    <H1>Gerer des articles</H1>
    <P>{props.titre}</P>   
    
    </Div>)

}