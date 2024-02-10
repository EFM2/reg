import styled from "styled-components"

const Div = styled.div`
    display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        position:relative;
        bottom: 0vh;
        background-color:black;
        height:90px;


`


    const P = styled.p`
        color:white;


    `



export default function Footer(){
    return(<Div>
        
        <P>Copyright © Your Website 2022</P>   
        
        </Div>)
}