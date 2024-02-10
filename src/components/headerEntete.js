import styled from "styled-components"
import { Link } from "react-router-dom"
const Div = styled.div`
    display:flex;
        align-items:baseline;
        
        padding:5px 10px;
        background-color:lightgray;


`

const  Li= styled.span`
text-decoration:underline lightgray;
color:black;
font-weight:bold;
margin-top:30px;

`

const H2 = styled.h2`
    


`

    const Ul = styled.ul`
        display:flex;
        list-style-type:none;
        gap:40px;

    `
export default function HeaderE(){
    return(<Div>
    <H2>Gestion des articles</H2>
    <Ul>
        <Link to="/ajout"><Li>ajout</Li></Link>
        <Link to="/modification"><Li>modification</Li></Link>
        <Link to="/suppresion"><Li>suppresion</Li></Link>
        <Link to="/recherche"><Li>recherche</Li></Link>
    </Ul>    
    
    </Div>)
}