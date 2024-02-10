import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Affichage() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        
        axios.get("http://localhost:3001/utilisateurs").then((res)=>setUsers(res.data))
        
    },[])
  return (
    <div>
      <h1>utilisateurs</h1>
      <table>
        <tr>
        <th>nom</th>
        <th>prenom</th>
        <th>fillier</th>
        <th>id</th>
        </tr>
        {users.map((user)=>{
            return(
                <tr>
                    <td>{user.nom}</td>
                    <td>{user.prenom}</td>
                    <td>{user.filiere}</td>
                    <td>{user.id}</td>
                </tr>
            )
        })}
      </table>
    
    
    </div>
  )
}

export default Affichage