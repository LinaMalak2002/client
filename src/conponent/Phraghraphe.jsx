import { useState } from "react";

function Phraghraphe (){
    const[phraghraphe,setPhraghraphe]=useState({
        color:'black',
        fontsize:'16px',
        fontfamliy:'Arile'
    });
    const changer1= () =>{
        setPhraghraphe(prev=>({...prev,
            color:"red",
            fontsize:"20px"
        }));
    }
    return(
        <div>
            <p style={phraghraphehraghraphe} onMouseEnter={changer1}
            onMouseLeave={quitter} je change ma couleur et mon taille>

            </p>
        </div>
    )
}
export default Phraghraphe;