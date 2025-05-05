import { useState } from "react";

function Utilisateur (){
    const [user,setUser ]= useState(
        {
            nom:'xxx',
            pernom:'yyy',
            age:20,
        }
    );
    const changer=(e)=>{
        const {name,value}=e.target;
    setUser(prUser =>({...prUser,[name]:value}
    ));
};
return(
    <div>
        <input type="text" name="nom" onChange={changer}/><br></br>
        <input type="text" name="pernom" onChange={changer}/><br></br>
        <input type="number" name="age" onChange={changer}/><br></br>
        <p>Utilisateur est {user.nom},{user.pernom},{user.age}</p>

    </div>
)
}
export default  Utilisateur;